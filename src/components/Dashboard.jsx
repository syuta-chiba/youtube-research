import { BUZZ_THRESHOLDS } from '../config.js'

function fmt(n) { return Number(n).toLocaleString() }

function BuzzBadge({ ratio }) {
  if (ratio >= BUZZ_THRESHOLDS.SUPER_BUZZ) return <span className="badge badge-super">超バズ {ratio.toFixed(1)}x</span>
  if (ratio >= BUZZ_THRESHOLDS.BUZZ) return <span className="badge badge-buzz">バズ {ratio.toFixed(1)}x</span>
  if (ratio >= BUZZ_THRESHOLDS.GOOD) return <span className="badge badge-good">好調 {ratio.toFixed(1)}x</span>
  return <span className="badge badge-normal">{ratio.toFixed(1)}x</span>
}

export default function Dashboard({ channels, buzzVideos, trendData, analysisData, lastCheck, isResearching, onStartResearch, onTabChange }) {
  const topBuzz = (buzzVideos || []).slice(0, 5)
  const maxBuzz = buzzVideos.length > 0 ? Math.max(...buzzVideos.map(v => v.buzzRatio)) : 0
  const deltaMode = channels.length > 0 && !!lastCheck

  return (
    <div>
      <div className="section-header">
        <h2 className="section-title">📊 ダッシュボード</h2>
        {lastCheck && (
          <span className="text-sm text-muted">
            前回調査: {new Date(lastCheck).toLocaleString('ja-JP')}
          </span>
        )}
      </div>

      {/* Stats */}
      <div className="grid-4 section">
        <div className="stat-card">
          <div className="stat-label">登録チャンネル数</div>
          <div className="stat-value">{channels.length}</div>
          <div className="stat-sub">監視対象</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">バズ動画数</div>
          <div className="stat-value">{buzzVideos.length}</div>
          <div className="stat-sub">今回の調査結果</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">最高バズ率</div>
          <div className="stat-value" style={{ color: maxBuzz >= 10 ? 'var(--red)' : maxBuzz >= 5 ? 'var(--orange)' : 'var(--text)' }}>
            {maxBuzz > 0 ? `${maxBuzz.toFixed(1)}x` : '-'}
          </div>
          <div className="stat-sub">再生数 ÷ 登録者数</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">超バズ動画</div>
          <div className="stat-value" style={{ color: 'var(--red)' }}>
            {buzzVideos.filter(v => v.buzzRatio >= BUZZ_THRESHOLDS.SUPER_BUZZ).length}
          </div>
          <div className="stat-sub">バズ率 10x 以上</div>
        </div>
      </div>

      {/* Research button */}
      <div className="card section" style={{ textAlign: 'center', padding: '32px 20px' }}>
        {channels.length === 0 && (
          <div className="alert alert-warning" style={{ marginBottom: 16, textAlign: 'left' }}>
            ⚠️ チャンネルが未登録です。まず「チャンネル管理」タブでチャンネルを追加してください。
          </div>
        )}
        <div style={{ marginBottom: 12, fontSize: 13, color: 'var(--text2)' }}>
          {deltaMode
            ? `⚡ 差分チェックモード（前回から新着のみ取得・Quota節約）`
            : `🔄 全件取得モード（全チャンネルの直近動画を取得）`
          }
        </div>
        <button
          className="btn btn-primary btn-lg"
          onClick={onStartResearch}
          disabled={isResearching || channels.length === 0}
          style={{ minWidth: 200 }}
        >
          {isResearching
            ? <><span className="spinner" style={{ marginRight: 8 }} /> 調査中…</>
            : '🚀 調査開始'
          }
        </button>
        <div className="text-sm text-muted" style={{ marginTop: 12 }}>
          {deltaMode
            ? `約 ${channels.length * 2} quota を消費します（activities.list + videos.list）`
            : `約 ${channels.length * 2 + 10} quota を消費します（playlistItems + videos）`
          }
        </div>
      </div>

      <div className="grid-2">
        {/* Top 5 buzz videos */}
        <div className="card">
          <div className="card-title">
            🔥 バズ動画 TOP5
            <button
              className="btn btn-ghost"
              style={{ fontSize: 11, padding: '2px 8px', marginLeft: 'auto' }}
              onClick={() => onTabChange('buzz')}
            >
              全件表示 →
            </button>
          </div>
          {topBuzz.length === 0 ? (
            <div className="empty-state" style={{ padding: '20px' }}>
              <div className="empty-state-desc">調査を実行すると表示されます</div>
            </div>
          ) : (
            <div>
              {topBuzz.map((v, i) => (
                <div key={v.videoId} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '10px 0', borderBottom: i < topBuzz.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--text2)', minWidth: 24 }}>#{i+1}</span>
                  {v.thumbnailUrl && (
                    <img src={v.thumbnailUrl} alt="" style={{ width: 60, height: 34, objectFit: 'cover', borderRadius: 4, flexShrink: 0 }} />
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <a
                      href={`https://youtube.com/watch?v=${v.videoId}`}
                      target="_blank" rel="noreferrer"
                      style={{ color: 'var(--text)', textDecoration: 'none', fontSize: 13, fontWeight: 500, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                    >
                      {v.title}
                    </a>
                    <div style={{ display: 'flex', gap: 8, marginTop: 4, alignItems: 'center' }}>
                      <span style={{ fontSize: 11, color: 'var(--text2)' }}>{v.channelTitle}</span>
                      <BuzzBadge ratio={v.buzzRatio} />
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--text2)', marginTop: 2 }}>
                      {fmt(v.viewCount)} 再生 / {fmt(v.subscriberCount)} 登録者
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Trends & quick actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Trending keywords */}
          <div className="card">
            <div className="card-title">
              📈 トレンドキーワード
              <button
                className="btn btn-ghost"
                style={{ fontSize: 11, padding: '2px 8px', marginLeft: 'auto' }}
                onClick={() => onTabChange('trends')}
              >
                詳細 →
              </button>
            </div>
            {trendData?.trending_keywords?.length > 0 ? (
              <div className="tag-cloud">
                {trendData.trending_keywords.slice(0, 12).map((kw, i) => (
                  <span key={i} className={`tag ${i < 3 ? 'tag-hot' : i < 6 ? 'tag-accent' : ''}`}>{kw}</span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted">トレンドデータなし（調査後に表示）</p>
            )}
          </div>

          {/* Quick actions */}
          <div className="card">
            <div className="card-title">⚡ クイックアクション</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <button className="btn btn-secondary w-full" onClick={() => onTabChange('channels')}>
                📺 チャンネルを追加・管理する
              </button>
              <button className="btn btn-secondary w-full" onClick={() => onTabChange('ideas')} disabled={!analysisData}>
                💡 AI企画案を見る {!analysisData ? '(調査後に利用可)' : ''}
              </button>
              <button className="btn btn-secondary w-full" onClick={() => onTabChange('settings')}>
                ⚙️ APIキー・フィルターを設定する
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

