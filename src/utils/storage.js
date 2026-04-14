import { DEFAULT_FILTERS } from '../config.js';

const SEED_CHANNELS = [
  { channelId: 'UCNYxc1EbWejb0uTFSL_D8w', name: 'プログラミングチュートリアル', subscriberCount: 101000, uploadsPlaylistId: 'UUNYxc1EbWejb0uTFSL_D8w', thumbnailUrl: '', source: 'manual', addedAt: '2026-04-14T00:00:00Z', lastChecked: null },
  { channelId: 'UCG4oXEgEDbCZSs1eFORCA',  name: 'HIROCODEヒロコード',           subscriberCount: 76900,  uploadsPlaylistId: 'UUG4oXEgEDbCZSs1eFORCA',  thumbnailUrl: '', source: 'manual', addedAt: '2026-04-14T00:00:00Z', lastChecked: null },
  { channelId: 'UCjQ3hd4-lnsXchct9KU531Q', name: 'Kyohei - OSS, 外資IT',        subscriberCount: 9360,   uploadsPlaylistId: 'UUjQ3hd4-lnsXchct9KU531Q', thumbnailUrl: '', source: 'manual', addedAt: '2026-04-14T00:00:00Z', lastChecked: null },
  { channelId: 'UCI5DreLNNe3wNZ46tdoRuA',  name: 'TECH WORLD',                  subscriberCount: 123000, uploadsPlaylistId: 'UUI5DreLNNe3wNZ46tdoRuA',  thumbnailUrl: '', source: 'manual', addedAt: '2026-04-14T00:00:00Z', lastChecked: null },
  { channelId: 'UCS9QNugbjzFur0Z0rdLxyg',  name: 'アキヨキ / Web制作チャンネル', subscriberCount: 52400,  uploadsPlaylistId: 'UUS9QNugbjzFur0Z0rdLxyg',  thumbnailUrl: '', source: 'manual', addedAt: '2026-04-14T00:00:00Z', lastChecked: null },
  { channelId: 'UC1G6G0lS4etLGGYcqNML4Q',  name: 'しまぶーのIT大学',            subscriberCount: 121000, uploadsPlaylistId: 'UU1G6G0lS4etLGGYcqNML4Q',  thumbnailUrl: '', source: 'manual', addedAt: '2026-04-14T00:00:00Z', lastChecked: null },
  { channelId: 'UCGdRPKFts1Puj6Mn704e3opA', name: 'シリコンバレーエンジニア酒井潤チャンネル', subscriberCount: 41400, uploadsPlaylistId: 'UUGdRPKFts1Puj6Mn704e3opA', thumbnailUrl: '', source: 'manual', addedAt: '2026-04-14T00:00:00Z', lastChecked: null },
  { channelId: 'UCLfMwLp9A0Gb9YEL1xo-sg',  name: 'ムーザルちゃんねる',          subscriberCount: 24200,  uploadsPlaylistId: 'UULfMwLp9A0Gb9YEL1xo-sg',  thumbnailUrl: '', source: 'manual', addedAt: '2026-04-14T00:00:00Z', lastChecked: null },
  { channelId: 'UCG4qKj1yVonLBbR6U79991w', name: 'キノコード / プログラミング学習チャンネル', subscriberCount: 196000, uploadsPlaylistId: 'UUG4qKj1yVonLBbR6U79991w', thumbnailUrl: '', source: 'manual', addedAt: '2026-04-14T00:00:00Z', lastChecked: null },
];

const KEYS = {
  YOUTUBE_API_KEY: 'yt_api_key',
  ANTHROPIC_API_KEY: 'anthropic_api_key',
  CHANNELS: 'channels',
  LAST_CHECK: 'last_check',
  QUOTA_USED: 'quota_used',
  QUOTA_DATE: 'quota_date',
  FILTERS: 'filters',
};

function get(key) {
  try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
}
function set(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

export function getYouTubeApiKey() { return localStorage.getItem(KEYS.YOUTUBE_API_KEY) || ''; }
export function setYouTubeApiKey(key) { localStorage.setItem(KEYS.YOUTUBE_API_KEY, key); }
export function getAnthropicApiKey() { return localStorage.getItem(KEYS.ANTHROPIC_API_KEY) || ''; }
export function setAnthropicApiKey(key) { localStorage.setItem(KEYS.ANTHROPIC_API_KEY, key); }

export function getChannels() {
  const saved = get(KEYS.CHANNELS);
  if (saved !== null) return saved;
  // 初回アクセス時はデフォルトチャンネルをセット
  set(KEYS.CHANNELS, SEED_CHANNELS);
  return SEED_CHANNELS;
}
export function saveChannels(channels) { set(KEYS.CHANNELS, channels); }

export function getLastCheck() { return get(KEYS.LAST_CHECK) || null; }
export function saveLastCheck(timestamp) { set(KEYS.LAST_CHECK, timestamp); }

export function getQuotaUsed() {
  const today = new Date().toISOString().slice(0, 10);
  const savedDate = localStorage.getItem(KEYS.QUOTA_DATE);
  if (savedDate !== today) {
    localStorage.setItem(KEYS.QUOTA_DATE, today);
    set(KEYS.QUOTA_USED, 0);
    return 0;
  }
  return get(KEYS.QUOTA_USED) || 0;
}
export function saveQuotaUsed(amount) { set(KEYS.QUOTA_USED, amount); }

export function saveBuzzHistory(date, data) { set(`buzz_history:${date}`, data); }
export function getBuzzHistory(date) { return get(`buzz_history:${date}`) || null; }

export function getFilters() { return { ...DEFAULT_FILTERS, ...(get(KEYS.FILTERS) || {}) }; }
export function saveFilters(filters) { set(KEYS.FILTERS, filters); }

export function clearAllData() {
  const keysToKeep = [KEYS.YOUTUBE_API_KEY, KEYS.ANTHROPIC_API_KEY];
  const allKeys = Object.keys(localStorage);
  allKeys.forEach(k => {
    if (!keysToKeep.includes(k)) localStorage.removeItem(k);
  });
}
