import { useState, useMemo } from 'react'
import { exportBuzzVideosCsv } from '../utils/csvExporter.js'
import { BUZZ_THRESHOLDS } from '../config.js'

function BuzzBadge({ ratio }) {
  if (ratio >= BUZZ_THRESHOLDS.SUPER_BUZZ) return <span className="badge badge-super">超バズ {ratio.toFixed(1)}x</span>
  if (ratio >= BUZZ_THRESHOLDS.BUZZ) return <span className="badge badge-buzz">バズ {ratio.toFixed(1)}x</span>
  if (ratio >= BUZZ_THRESHOLDS.GOOD) return <span className="badge badge-good">好調 {ratio.toFixed(1)}x</span>
  return <span className="badge badge-normal">{ratio.toFixed(1)}x</span>
}

function fmt(n) { return Number(n).toLocaleString() }

function fmtDur(s) {
  if (!s) return '-'
  const m = Math.floor(s / 60), sec = s % 60
  const h = Math.floor(m / 60)
  if (h > 0) return `${h}:${String(m % 60).padStart(2,'0')}:${String(sec).padStart(2,'0')}`
  return `${m}:${String(sec).padStart(2,'0')}`
}

export default function BuzzRanking({ videos, filters, onFiltersChange }) {
  const [localFilters, setLocalFilters] = useState(filters)
  const [sortKey, setSortKey] = useState('buzzRatio')
  const [sortDir, setSortDir] = useState('desc')

  function handleSort(key) {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('desc') }
  }

  function applyFilters() { onFiltersChange(localFilters) }

  const filtered = useMemo(() => {
    return [...videos].sort((a, b) => {
      const va = a[sortKey], vb = b[sortKey]
      return sortDir === 'asc' ? (va > vb ? 1 : -1) : (va < vb ? 1 : -1)
    })
  }, [videos, sortKey, sortDir])

  const stats = useMemo(() => ({
    superBuzz: videos.filter(v => v.buzzRatio >= BUZZ_THRESHOLDS.SUPER_BUZZ).length,
    buzz: videos.filter(v => v.buzzRatio >= BUZZ_THRESHOLDS.BUZZ && v.buzzRatio < BUZZ_THRESHOLDS.SUPER_BUZZ).length,
    good: videos.filter(v => v.buzzRatio >= BUZZ_THRESHOLDS.GOOD && v.buzzRatio < BUZZ_THRESHOLDS.BUZZ).length,
  }), [videos])

  const SortIcon = ({ k }) => sortKey === k ? (sortDir === 'desc' ? ' ↓' : ' ↑') : ''

  return (
    <div>
      <div className="section-header">
        <h2 className="section-title">🔥 バズ動画ランキング</h2>
        <button
          className="btn btn-secondary"
          onClick={() => exportBuzzVideosCsv(videos)}
          disabled={!videos.length}
        >
          📥 CSV出力
        </button>
      </div>

      {/* Filters */}
      <div className="filter-panel">
        <div className="filter-item">
          <span className="filter-label">調査期間</span>
          <select
            className="filter-select"
            value={localFilters.daysBack}
            onChange={e => setLocalFilters(f => ({ ...f, daysBack: +e.target.value }))}
          >
            {[7, 14, 30, 60, 90].map(d => <option key={d} value={d}>{d}日</option>)}
          </select>
        </div>
        <div className="filter-item">
          <span className="filter-label">最低登録者数</span>
          <input
            type="number"
            className="filter-input"
            style={{ width: 100 }}
            value={localFilters.minSubscribers}
            onChange={e => setLocalFilters(f => ({ ...f, minSubscribers: +e.target.value }))}
          />
        </div>
        <div className="filter-item">
          <span className="filter-label">最低再生数</span>
          <input
            type="number"
            className="filter-input"
            style={{ width: 100 }}
            value={localFilters.minViews}
            onChange={e => setLocalFilters(f => ({ ...f, minViews: +e.target.value }))}
          />
        </div>
        <label className="filter-checkbox">
          <input
            type="checkbox"
            checked={localFilters.excludeShorts}
            onChange={e => setLocalFilters(f => ({ ...f, excludeShorts: e.target.checked }))}
          />
          Shorts除外
        </label>
        <button className="btn btn-primary" onClick={applyFilters}>適用</button>
      </div>

      {/* Summary */}
      {videos.length > 0 && (
        <div className="flex gap-8" style={{ marginBottom: 16, flexWrap: 'wrap' }}>
          <span className="badge badge-super">超バズ: {stats.superBuzz}件</span>
          <span className="badge badge-buzz">バズ: {stats.buzz}件</span>
          <span className="badge badge-good">好調: {stats.good}件</span>
          <span className="text-muted text-sm">合計 {videos.length}件</span>
        </div>
      )}

      {videos.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🔥</div>
          <div className="empty-state-title">バズ動画データがありません</div>
          <div className="empty-state-desc">ダッシュボードから「調査開始」を実行してください</div>
        </div>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>順位</th>
                <th>サムネイル</th>
                <th style={{ cursor: 'pointer' }} onClick={() => handleSort('title')}>タイトル<SortIcon k="title" /></th>
                <th style={{ cursor: 'pointer' }} onClick={() => handleSort('channelTitle')}>チャンネル<SortIcon k="channelTitle" /></th>
                <th style={{ cursor: 'pointer' }} onClick={() => handleSort('viewCount')}>再生数<SortIcon k="viewCount" /></th>
                <th style={{ cursor: 'pointer' }} onClick={() => handleSort('subscriberCount')}>登録者数<SortIcon k="subscriberCount" /></th>
                <th style={{ cursor: 'pointer' }} onClick={() => handleSort('buzzRatio')}>バズ率<SortIcon k="buzzRatio" /></th>
                <th style={{ cursor: 'pointer' }} onClick={() => handleSort('publishedAt')}>公開日<SortIcon k="publishedAt" /></th>
                <th>時間</th>
                <th>リンク</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((v, i) => (
                <tr key={v.videoId}>
                  <td style={{ fontWeight: 700, color: 'var(--text2)' }}>#{i + 1}</td>
                  <td className="td-thumb">
                    {v.thumbnailUrl
                      ? <img src={v.thumbnailUrl} alt="" loading="lazy" />
                      : <div style={{ width: 64, height: 36, background: 'var(--bg3)', borderRadius: 4 }} />
                    }
                  </td>
                  <td className="td-title">
                    <a href={`https://youtube.com/watch?v=${v.videoId}`} target="_blank" rel="noreferrer">
                      <div className="title-text">{v.title}</div>
                    </a>
                  </td>
                  <td style={{ whiteSpace: 'nowrap' }}>{v.channelTitle}</td>
                  <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>{fmt(v.viewCount)}</td>
                  <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>{fmt(v.subscriberCount)}</td>
                  <td><BuzzBadge ratio={v.buzzRatio} /></td>
                  <td style={{ whiteSpace: 'nowrap' }}>
                    {v.publishedAt ? new Date(v.publishedAt).toLocaleDateString('ja-JP') : '-'}
                  </td>
                  <td style={{ whiteSpace: 'nowrap' }}>{fmtDur(v.durationSeconds)}</td>
                  <td>
                    <a href={`https://youtube.com/watch?v=${v.videoId}`} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ padding: '4px 8px', fontSize: 12 }}>
                      ▶
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
