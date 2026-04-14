// YouTube Data API v3 クォータコスト定義
export const QUOTA_COSTS = {
  'search.list': 100,
  'channels.list': 1,
  'playlistItems.list': 1,
  'videos.list': 1,
  'activities.list': 1,
};

export const DAILY_QUOTA_LIMIT = 10000;
export const QUOTA_WARNING_THRESHOLD = 8000;

// バズ率の判定基準
export const BUZZ_THRESHOLDS = {
  SUPER_BUZZ: 10,
  BUZZ: 5,
  GOOD: 2,
};

// デフォルト検索キーワード（日本向け）
export const DEFAULT_KEYWORDS = [
  'プログラミング 入門',
  'React チュートリアル',
  'Web開発',
  'Python 初心者',
  'JavaScript',
  'TypeScript',
  'Next.js',
  'AI プログラミング',
];

// デフォルトフィルタ設定
export const DEFAULT_FILTERS = {
  daysBack: 30,
  excludeShorts: true,
  minSubscribers: 100,
  minViews: 1000,
};

// YouTube API base URL
export const YT_API_BASE = 'https://www.googleapis.com/youtube/v3';

// Anthropic API base URL
export const ANTHROPIC_API_BASE = 'https://api.anthropic.com/v1';
export const ANTHROPIC_MODEL = 'claude-opus-4-6';
