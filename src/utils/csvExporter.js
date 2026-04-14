export function exportBuzzVideosCsv(videos) {
  const headers = ['タイトル', 'チャンネル', '再生数', '登録者数', 'バズ率', '公開日', 'URL', '動画時間(秒)'];
  const rows = videos.map(v => [
    `"${(v.title || '').replace(/"/g, '""')}"`,
    `"${(v.channelTitle || '').replace(/"/g, '""')}"`,
    v.viewCount || 0,
    v.subscriberCount || 0,
    (v.buzzRatio || 0).toFixed(2),
    v.publishedAt ? new Date(v.publishedAt).toLocaleDateString('ja-JP') : '',
    `https://www.youtube.com/watch?v=${v.videoId}`,
    v.durationSeconds || 0,
  ]);
  downloadCsv([headers, ...rows], `buzz_videos_${today()}.csv`);
}

export function exportChannelsCsv(channels) {
  const headers = ['チャンネル名', 'チャンネルID', '登録者数', '追加日時', 'ソース', '最終チェック'];
  const rows = channels.map(c => [
    `"${(c.name || '').replace(/"/g, '""')}"`,
    c.channelId || '',
    c.subscriberCount || 0,
    c.addedAt ? new Date(c.addedAt).toLocaleDateString('ja-JP') : '',
    c.source || '',
    c.lastChecked ? new Date(c.lastChecked).toLocaleDateString('ja-JP') : '未チェック',
  ]);
  downloadCsv([headers, ...rows], `channels_${today()}.csv`);
}

function today() { return new Date().toISOString().slice(0, 10); }

function downloadCsv(rows, filename) {
  const csvContent = rows.map(r => r.join(',')).join('\n');
  const bom = '\uFEFF';
  const blob = new Blob([bom + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
