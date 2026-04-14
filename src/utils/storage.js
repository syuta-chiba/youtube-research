import { DEFAULT_FILTERS } from '../config.js';

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

export function getChannels() { return get(KEYS.CHANNELS) || []; }
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
