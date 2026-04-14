export default function TrendReport({ trendData }) {
  if (!trendData) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">📈</div>
        <div className="empty-state-title">トレンドデータがありません</div>
        <div className="empty-state-desc">
          ダッシュボードから「調査開始」を実行してください。<br />
          Anthropic APIキーが設定されている場合のみ利用可能です。
        </div>
      </div>
    )
  }

  const buzzColor = { high: 'badge-super', medium: 'badge-buzz', low: 'badge-good' }
  const catLabel = { framework: 'FW', library: 'Lib', tool: 'Tool', ai: 'AI' }

  return (
    <div>
      <div className="section-header">
        <h2 className="section-title">📈 トレンドレポート</h2>
        {trendData.searched_at && (
          <span className="text-sm text-muted">
            調査日時: {new Date(trendData.searched_at).toLocaleString('ja-JP')}
          </span>
        )}
      </div>

      <div className="grid-2 section">
        {/* Hot topics */}
        <div className="card">
          <div className="card-title">🔥 ホットトピック</div>
          {(trendData.hot_topics || []).length === 0
            ? <p className="text-muted text-sm">データなし</p>
            : (
              <ol style={{ paddingLeft: 20 }}>
                {trendData.hot_topics.map((t, i) => (
                  <li key={i} style={{ marginBottom: 8, fontSize: 13 }}>{t}</li>
                ))}
              </ol>
            )
          }
        </div>

        {/* Trending keywords */}
        <div className="card">
          <div className="card-title">🏷️ トレンドキーワード</div>
          <div className="tag-cloud">
            {(trendData.trending_keywords || []).map((kw, i) => (
              <span key={i} className={`tag ${i < 3 ? 'tag-hot' : i < 8 ? 'tag-accent' : ''}`}>{kw}</span>
            ))}
            {(trendData.trending_keywords || []).length === 0 && <p className="text-muted text-sm">データなし</p>}
          </div>
        </div>
      </div>

      {/* New releases */}
      {(trendData.new_releases || []).length > 0 && (
        <div className="card section">
          <div className="card-title">🚀 新着リリース</div>
          <div className="grid-2" style={{ gap: 12 }}>
            {trendData.new_releases.map((r, i) => (
              <div key={i} style={{ background: 'var(--bg3)', borderRadius: 8, padding: 12, border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-8" style={{ marginBottom: 6 }}>
                  <span style={{ fontWeight: 600, fontSize: 14 }}>{r.name}</span>
                  <span className="badge badge-accent" style={{ fontSize: 10 }}>{catLabel[r.category] || r.category}</span>
                  <span className={`badge ${buzzColor[r.buzz_level] || 'badge-normal'}`} style={{ fontSize: 10 }}>
                    {r.buzz_level === 'high' ? '🔥高' : r.buzz_level === 'medium' ? '📊中' : '📉低'}
                  </span>
                </div>
                <p className="text-sm text-muted">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content ideas from trend agent */}
      {(trendData.content_ideas || []).length > 0 && (
        <div className="card section">
          <div className="card-title">💡 トレンドベース企画案</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {trendData.content_ideas.map((idea, i) => (
              <div key={i} className="idea-card">
                <div className="idea-card-header">
                  <div className="idea-rank" style={{ width: 28, height: 28, fontSize: 12 }}>{i + 1}</div>
                  <div>
                    <div className="idea-title" style={{ fontSize: 14 }}>{idea.suggested_title || idea.idea}</div>
                    {idea.suggested_title && <div className="text-muted text-sm" style={{ marginTop: 2 }}>{idea.idea}</div>}
                  </div>
                </div>
                <p className="idea-why">{idea.why}</p>
                <div className="idea-meta">
                  <span className={`badge ${idea.estimated_demand === '高' ? 'badge-super' : idea.estimated_demand === '中' ? 'badge-buzz' : 'badge-normal'}`}>
                    需要: {idea.estimated_demand}
                  </span>
                  <span className={`badge ${idea.difficulty === '低' ? 'badge-good' : idea.difficulty === '中' ? 'badge-buzz' : 'badge-super'}`}>
                    難易度: {idea.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
