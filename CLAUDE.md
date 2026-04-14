# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build (outputs to dist/)
npm run preview  # Preview production build
```

No test runner or linter is configured.

## Architecture

Single-page React app (Vite) that runs entirely in the browser — no backend. All API calls are made directly from the browser using `fetch`.

### Data flow

```
User clicks "調査開始"
  → App.jsx: handleStartResearch()
      ├── youtubeAgent.js: fetchChannelDetails() + fetchRecentVideos()  [full mode]
      │   OR checkNewActivities() + fetchVideoDetails()                 [delta mode, 2nd+ run]
      ├── trendAgent.js: fetchTrends()   [parallel, requires Anthropic key]
      └── analysisAgent.js: analyzeResults()  [after buzz videos ready]
  → state + localStorage updated
  → components re-render
```

**Full vs delta mode**: If `lastCheck` exists in localStorage, the app uses `activities.list` (1 quota/channel) instead of `playlistItems.list` (1 quota/channel) to only fetch new videos. This is the core quota-saving strategy.

### Key files

- `src/config.js` — all constants: quota costs, buzz thresholds, default filters, API base URLs, model name
- `src/utils/storage.js` — all localStorage access; auto-resets quota counter when date changes
- `src/utils/quotaManager.js` — tracks YouTube API quota spend; throws when daily limit (10,000) is reached; uses listener pattern for QuotaBar live updates
- `src/agents/youtubeAgent.js` — YouTube Data API v3; batches video IDs in groups of 50 (API max); parses ISO 8601 durations; handles `hiddenSubscriberCount`
- `src/agents/trendAgent.js` — calls Anthropic `/v1/messages` with `web_search_20250305` tool; requires `anthropic-dangerous-direct-browser-access: true` header for browser use
- `src/agents/analysisAgent.js` — calls Anthropic `/v1/messages` without tools; sends top 10 buzz videos + trend data; expects JSON response
- `src/App.jsx` — owns all global state; passes handlers down as props

### Quota costs (YouTube Data API v3)

| Method | Cost |
|--------|------|
| `search.list` | 100 (channel discovery only) |
| `channels.list`, `playlistItems.list`, `videos.list`, `activities.list` | 1 each |

Daily limit: 10,000. Warning threshold: 8,000.

### Buzz ratio

`buzzRatio = viewCount / subscriberCount`

Thresholds: SUPER_BUZZ ≥ 10, BUZZ ≥ 5, GOOD ≥ 2 (defined in `config.js`).

### Persistence (localStorage keys)

- `yt_api_key`, `anthropic_api_key` — API keys (plain string, not JSON)
- `channels` — JSON array of channel objects
- `last_check` — ISO timestamp of last research run
- `quota_used`, `quota_date` — daily quota counter (auto-resets on date change)
- `filters` — user filter preferences
- `buzz_history:{YYYY-MM-DD}` — daily snapshot of `{ videos, trendData, analysisData }`
