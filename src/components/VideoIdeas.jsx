import { useState } from 'react'

export default function VideoIdeas({ analysisData }) {
  const [openPattern, setOpenPattern] = useState(null)

  if (!analysisData) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">💡</div>
        <div className="empty-state-title">AI企画案がありません</div>
        <div className="empty-state-desc">
          バズ動画データが取得された後、Anthropic APIキーが設定されていれば自動生成されます。
        </div>
      </div>
    )
  }

  const demandColor = { '高': 'badge-super', '中': 'badge-buzz', '低': 'badge-normal' }
  const diffColor = { '低': 'badge-good', '中': 'badge-buzz', '高': 'badge-super' }
  const buzzColor = { '高': 'badge-super', '中': 'badge-buzz', '低': 'badge-normal' }
  const formatColor = {
    'チュートリアル': 'badge-accent', '解説': 'badge-accent',
    '比較': 'badge-buzz', '実況': 'badge-good',
    'レビュー': 'badge-buzz', 'ニュース': 'badge-super', '入門': 'badge-good',
  }

  return (
    <div>
      <div className="section-header">
        <h2 className="section-title">💡 AI生成企画案</h2>
        {analysisData.analyzed_at && (
          <span className="text-sm text-muted">
            分析日時: {new Date(analysisData.analyzed_at).toLocaleString('ja-JP')}
          </span>
        )}
      </div>

      {/* Summary */}
      {analysisData.analysis_summary && (
        <div className="card section" style={{ borderLeft: '3px solid var(--accent)' }}>
          <div className="card-title">📊 分析サマリー</div>
          <p style={{ fontSize: 14, lineHeight: 1.7 }}>{analysisData.analysis_summary}</p>
          {analysisData.timing_advice && (
            <p style={{ fontSize: 13, color: 'var(--text2)', marginTop: 10 }}>
              ⏰ <strong style={{ color: 'var(--text)' }}>タイミング:</strong> {analysisData.timing_advice}
            </p>
          )}
        </div>
      )}

      {/* Recommended videos */}
      {(analysisData.recommended_videos || []).length > 0 && (
        <div className="section">
          <div className="section-title" style={{ marginBottom: 12 }}>🏆 おすすめ動画企画ランキング</div>
          {analysisData.recommended_videos.map((v, i) => (
            <div key={i} className="idea-card">
              <div className="idea-card-header">
                <div className="idea-rank" style={{ background: i === 0 ? '#ffd43b' : i === 1 ? '#adb5bd' : i === 2 ? '#cd7f32' : 'var(--accent)', color: i < 3 ? '#000' : '#fff' }}>
                  {v.rank || i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div className="idea-title">{v.title}</div>
                  <div className="flex gap-8 items-center" style={{ marginTop: 6, flexWrap: 'wrap' }}>
                    <span className={`badge ${formatColor[v.format] || 'badge-accent'}`}>{v.format}</span>
                    <span className="text-sm text-muted">{v.topic}</span>
                    <span className="text-sm text-muted">⏱ {v.estimated_duration}</span>
                    {v.target_audience && <span className="text-sm text-muted">👥 {v.target_audience}</span>}
                  </div>
                </div>
              </div>

              {v.why_now && <p className="idea-why">💡 {v.why_now}</p>}

              <div className="idea-meta">
                <span className={`badge ${demandColor[v.estimated_demand] || 'badge-normal'}`}>需要: {v.estimated_demand}</span>
                <span className={`badge ${diffColor[v.difficulty_to_create] || 'badge-normal'}`}>難易度: {v.difficulty_to_create}</span>
                <span className={`badge ${buzzColor[v.buzz_potential] || 'badge-normal'}`}>バズ期待: {v.buzz_potential}</span>
              </div>

              {(v.key_points || []).length > 0 && (
                <ul className="idea-points" style={{ marginTop: 10 }}>
                  {v.key_points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* SEO keywords */}
      {(analysisData.keywords_to_include || []).length > 0 && (
        <div className="card section">
          <div className="card-title">🔍 含めるべきSEOキーワード</div>
          <div className="tag-cloud">
            {analysisData.keywords_to_include.map((kw, i) => (
              <span key={i} className={`tag ${i < 5 ? 'tag-accent' : ''}`}>{kw}</span>
            ))}
          </div>
        </div>
      )}

      {/* Buzz patterns accordion */}
      {(analysisData.buzz_patterns || []).length > 0 && (
        <div className="section">
          <div className="section-title" style={{ marginBottom: 12 }}>🔍 バズパターン分析</div>
          <div className="accordion">
            {analysisData.buzz_patterns.map((p, i) => (
              <div key={i} className="accordion-item">
                <div
                  className="accordion-header"
                  onClick={() => setOpenPattern(openPattern === i ? null : i)}
                >
                  <span>
                    {p.applicable_to_my_channel ? '✅' : '📋'} {p.pattern}
                  </span>
                  <span>{openPattern === i ? '▲' : '▼'}</span>
                </div>
                {openPattern === i && (
                  <div className="accordion-body">
                    <p style={{ marginBottom: 8 }}>{p.description}</p>
                    {(p.examples || []).length > 0 && (
                      <p style={{ marginBottom: 8 }}>
                        <strong>例:</strong> {p.examples.join(' / ')}
                      </p>
                    )}
                    <p style={{ color: p.applicable_to_my_channel ? 'var(--green)' : 'var(--text2)' }}>
                      {p.applicable_to_my_channel ? '✅' : '📋'} {p.reason}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
