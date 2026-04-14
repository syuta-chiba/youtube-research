import { YT_API_BASE, BUZZ_THRESHOLDS, DEFAULT_FILTERS } from '../config.js';
import { trackQuota } from '../utils/quotaManager.js';

// Parse ISO 8601 duration (PT1H30M45S) to seconds
function parseDuration(iso) {
  if (!iso) return 0;
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return 0;
  return (parseInt(m[1] || 0) * 3600) + (parseInt(m[2] || 0) * 60) + parseInt(m[3] || 0);
}

function chunk(arr, n) {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
}

async function ytFetch(url) {
  const res = await fetch(url);
  if (!res.ok) {
    let msg = res.statusText;
    try {
      const err = await res.json();
      msg = err?.error?.message || msg;
    } catch {}
    throw new Error(`YouTube API error ${res.status}: ${msg}`);
  }
  return res.json();
}

function buzzLevel(ratio) {
  if (ratio >= BUZZ_THRESHOLDS.SUPER_BUZZ) return 'SUPER_BUZZ';
  if (ratio >= BUZZ_THRESHOLDS.BUZZ) return 'BUZZ';
  if (ratio >= BUZZ_THRESHOLDS.GOOD) return 'GOOD';
  return 'NORMAL';
}

/**
 * Discover channels by keyword using search.list
 * 100 quota per keyword
 */
export async function discoverChannels(apiKey, keywords) {
  const seen = new Set();
  const results = [];
  for (const kw of keywords) {
    const url = `${YT_API_BASE}/search?part=snippet&q=${encodeURIComponent(kw)}&type=channel&regionCode=JP&maxResults=10&key=${apiKey}`;
    trackQuota('search.list');
    const data = await ytFetch(url);
    for (const item of (data.items || [])) {
      const id = item.snippet.channelId || item.id?.channelId;
      if (id && !seen.has(id)) {
        seen.add(id);
        results.push({
          channelId: id,
          name: item.snippet.title,
          thumbnailUrl: item.snippet.thumbnails?.default?.url || '',
        });
      }
    }
  }
  return results;
}

/**
 * Get channel details: uploads playlist ID, subscriber count, etc.
 * 1 quota per batch of 50
 */
export async function fetchChannelDetails(apiKey, channelIds) {
  const results = [];
  for (const batch of chunk(channelIds, 50)) {
    const url = `${YT_API_BASE}/channels?part=snippet,statistics,contentDetails&id=${batch.join(',')}&key=${apiKey}`;
    trackQuota('channels.list');
    const data = await ytFetch(url);
    for (const ch of (data.items || [])) {
      results.push({
        channelId: ch.id,
        name: ch.snippet.title,
        thumbnailUrl: ch.snippet.thumbnails?.default?.url || '',
        subscriberCount: ch.statistics.hiddenSubscriberCount
          ? 0
          : parseInt(ch.statistics.subscriberCount || 0),
        videoCount: parseInt(ch.statistics.videoCount || 0),
        uploadsPlaylistId: ch.contentDetails?.relatedPlaylists?.uploads || '',
      });
    }
  }
  return results;
}

/**
 * Fetch recent videos for a list of channels
 * Channels must have { channelId, subscriberCount, uploadsPlaylistId, name }
 */
export async function fetchRecentVideos(apiKey, channels, filters = DEFAULT_FILTERS) {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - (filters.daysBack || 30));

  // Step 1: collect video IDs from each channel's uploads playlist
  const videoIdToSubs = {}; // videoId -> { subscriberCount, channelTitle }
  const allVideoIds = [];

  for (const ch of channels) {
    if (!ch.uploadsPlaylistId) continue;
    const url = `${YT_API_BASE}/playlistItems?part=contentDetails,snippet&playlistId=${ch.uploadsPlaylistId}&maxResults=50&key=${apiKey}`;
    trackQuota('playlistItems.list');
    const data = await ytFetch(url);
    for (const item of (data.items || [])) {
      const vid = item.contentDetails?.videoId;
      const publishedAt = item.contentDetails?.videoPublishedAt || item.snippet?.publishedAt;
      if (vid && publishedAt && new Date(publishedAt) >= cutoff) {
        allVideoIds.push(vid);
        videoIdToSubs[vid] = { subscriberCount: ch.subscriberCount, channelTitle: ch.name, channelId: ch.channelId };
      }
    }
  }

  if (allVideoIds.length === 0) return [];

  // Step 2: fetch details in batches of 50
  const videos = [];
  for (const batch of chunk([...new Set(allVideoIds)], 50)) {
    const url = `${YT_API_BASE}/videos?part=snippet,statistics,contentDetails&id=${batch.join(',')}&key=${apiKey}`;
    trackQuota('videos.list');
    const data = await ytFetch(url);
    for (const v of (data.items || [])) {
      const meta = videoIdToSubs[v.id] || {};
      const viewCount = parseInt(v.statistics?.viewCount || 0);
      const subs = meta.subscriberCount || 1;
      const dur = parseDuration(v.contentDetails?.duration);
      const ratio = subs > 0 ? viewCount / subs : 0;

      if (viewCount < (filters.minViews || 0)) continue;
      if (filters.excludeShorts && dur > 0 && dur <= 60) continue;
      if (subs < (filters.minSubscribers || 0)) continue;

      videos.push({
        videoId: v.id,
        title: v.snippet?.title || '',
        channelId: v.snippet?.channelId || meta.channelId,
        channelTitle: v.snippet?.channelTitle || meta.channelTitle || '',
        subscriberCount: meta.subscriberCount || 0,
        viewCount,
        likeCount: parseInt(v.statistics?.likeCount || 0),
        commentCount: parseInt(v.statistics?.commentCount || 0),
        publishedAt: v.snippet?.publishedAt || '',
        durationSeconds: dur,
        thumbnailUrl: v.snippet?.thumbnails?.medium?.url || v.snippet?.thumbnails?.default?.url || '',
        buzzRatio: ratio,
        buzzLevel: buzzLevel(ratio),
      });
    }
  }

  return videos.sort((a, b) => b.buzzRatio - a.buzzRatio);
}

/**
 * Check for new videos since last check using activities.list (1 quota per channel)
 */
export async function checkNewActivities(apiKey, channelIds, sinceTimestamp) {
  const result = {};
  for (const channelId of channelIds) {
    const url = `${YT_API_BASE}/activities?part=contentDetails,snippet&channelId=${channelId}&publishedAfter=${sinceTimestamp}&maxResults=50&key=${apiKey}`;
    trackQuota('activities.list');
    const data = await ytFetch(url);
    const newIds = (data.items || [])
      .filter(a => a.snippet?.type === 'upload')
      .map(a => a.contentDetails?.upload?.videoId)
      .filter(Boolean);
    if (newIds.length > 0) result[channelId] = newIds;
  }
  return result;
}

/**
 * Fetch details for specific video IDs with buzz ratio calculation
 * channelMap: { channelId -> { subscriberCount, name } }
 */
export async function fetchVideoDetails(apiKey, videoIds, channelMap = {}) {
  const videos = [];
  for (const batch of chunk([...new Set(videoIds)], 50)) {
    const url = `${YT_API_BASE}/videos?part=snippet,statistics,contentDetails&id=${batch.join(',')}&key=${apiKey}`;
    trackQuota('videos.list');
    const data = await ytFetch(url);
    for (const v of (data.items || [])) {
      const chId = v.snippet?.channelId;
      const meta = channelMap[chId] || {};
      const viewCount = parseInt(v.statistics?.viewCount || 0);
      const subs = meta.subscriberCount || 1;
      const dur = parseDuration(v.contentDetails?.duration);
      const ratio = subs > 0 ? viewCount / subs : 0;
      videos.push({
        videoId: v.id,
        title: v.snippet?.title || '',
        channelId: chId,
        channelTitle: v.snippet?.channelTitle || meta.name || '',
        subscriberCount: meta.subscriberCount || 0,
        viewCount,
        likeCount: parseInt(v.statistics?.likeCount || 0),
        commentCount: parseInt(v.statistics?.commentCount || 0),
        publishedAt: v.snippet?.publishedAt || '',
        durationSeconds: dur,
        thumbnailUrl: v.snippet?.thumbnails?.medium?.url || '',
        buzzRatio: ratio,
        buzzLevel: buzzLevel(ratio),
      });
    }
  }
  return videos.sort((a, b) => b.buzzRatio - a.buzzRatio);
}

/**
 * Add a channel by URL or ID. Returns channel info or throws.
 */
export async function addChannelByUrlOrId(apiKey, input) {
  input = input.trim();
  let params = '';

  // Parse various URL formats
  const channelMatch = input.match(/youtube\.com\/channel\/(UC[\w-]+)/);
  const handleMatch = input.match(/youtube\.com\/@([\w.-]+)/);
  const customMatch = input.match(/youtube\.com\/c\/([\w.-]+)/);

  if (channelMatch) {
    params = `id=${channelMatch[1]}`;
  } else if (handleMatch) {
    params = `forHandle=@${handleMatch[1]}`;
  } else if (customMatch) {
    params = `forUsername=${customMatch[1]}`;
  } else if (/^UC[\w-]+$/.test(input)) {
    params = `id=${input}`;
  } else {
    // Try as forHandle without @
    params = `forHandle=@${input.replace(/^@/, '')}`;
  }

  const url = `${YT_API_BASE}/channels?part=snippet,statistics,contentDetails&${params}&key=${apiKey}`;
  trackQuota('channels.list');
  const data = await ytFetch(url);

  if (!data.items || data.items.length === 0) {
    throw new Error('チャンネルが見つかりませんでした。URLまたはIDを確認してください。');
  }

  const ch = data.items[0];
  return {
    channelId: ch.id,
    name: ch.snippet.title,
    thumbnailUrl: ch.snippet.thumbnails?.default?.url || '',
    subscriberCount: ch.statistics.hiddenSubscriberCount
      ? 0
      : parseInt(ch.statistics.subscriberCount || 0),
    uploadsPlaylistId: ch.contentDetails?.relatedPlaylists?.uploads || '',
    addedAt: new Date().toISOString(),
    source: 'manual',
    lastChecked: null,
  };
}
