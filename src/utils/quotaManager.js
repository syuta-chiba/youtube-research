import { QUOTA_COSTS, DAILY_QUOTA_LIMIT, QUOTA_WARNING_THRESHOLD } from '../config.js';
import { getQuotaUsed, saveQuotaUsed } from './storage.js';

let listeners = [];

export function trackQuota(method) {
  const cost = QUOTA_COSTS[method] || 1;
  const total = getQuotaUsed() + cost;
  saveQuotaUsed(total);
  listeners.forEach(fn => fn(total));
  if (total >= DAILY_QUOTA_LIMIT) {
    throw new Error(`Daily quota limit reached: ${total}/${DAILY_QUOTA_LIMIT}`);
  }
  if (total >= QUOTA_WARNING_THRESHOLD) {
    console.warn(`Quota warning: ${total}/${DAILY_QUOTA_LIMIT} used`);
  }
  return total;
}

export function getQuotaStatus() {
  const used = getQuotaUsed();
  return {
    used,
    limit: DAILY_QUOTA_LIMIT,
    remaining: DAILY_QUOTA_LIMIT - used,
    percentage: Math.min(100, (used / DAILY_QUOTA_LIMIT) * 100),
    isWarning: used >= QUOTA_WARNING_THRESHOLD,
    isExceeded: used >= DAILY_QUOTA_LIMIT,
  };
}

export function onQuotaChange(fn) {
  listeners.push(fn);
  return () => { listeners = listeners.filter(l => l !== fn); };
}

export function resetQuota() {
  saveQuotaUsed(0);
  listeners.forEach(fn => fn(0));
}
