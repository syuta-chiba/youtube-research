import { useState } from 'react'
import {
  getYouTubeApiKey, setYouTubeApiKey,
  getAnthropicApiKey, setAnthropicApiKey,
  saveFilters, clearAllData, clearLastCheck,
} from '../utils/storage.js'
import { resetQuota } from '../utils/quotaManager.js'
import { DEFAULT_FILTERS } from '../config.js'

export default function Settings({ filters, onFiltersChange, showToast }) {
  const [ytKey, setYtKey] = useState(getYouTubeApiKey())
  const [anKey, setAnKey] = useState(getAnthropicApiKey())
  const [showYt, setShowYt] = useState(false)
  const [showAn, setShowAn] = useState(false)
  const [localFilters, setLocalFilters] = useState(filters)

  function saveApiKeys() {
    setYouTubeApiKey(ytKey.trim())
    setAnthropicApiKey(anKey.trim())
    showToast('APIキーを保存しました', 'success')
  }

  function saveFilterSettings() {
    saveFilters(localFilters)
    onFiltersChange(localFilters)
    showToast('フィルター設定を保存しました', 'success')
  }

  function handleClearData() {
    if (!confirm('チャンネル・バズ履歴データを全て削除しますか？APIキーは保持されます。')) return
    clearAllData()
    showToast('データをクリアしました', 'info')
  }

  function handleResetQuota() {
    resetQuota()
    showToast('Quota使用量をリセットしました', 'info')
  }

  return (
    <div>
      <h2 className="section-title" style={{ marginBottom: 20 }}>⚙️ 設定</h2>

      {/* API Keys */}
      <div className="card section">
        <div className="card-title">🔑 APIキー設定</div>

        <div className="form-group">
          <label className="form-label">YouTube Data API v3 キー</label>
          <div className="input-row">
            <input
              type={showYt ? 'text' : 'password'}
              className="form-input"
              value={ytKey}
              onChange={e => setYtKey(e.target.value)}
              placeholder="AIza..."
            />
            <button className="btn btn-ghost" onClick={() => setShowYt(v => !v)}>
              {showYt ? '🙈' : '👁️'}
            </button>
          </div>
          <p className="text-sm text-muted">
            Google Cloud Console で取得。YouTube Data API v3 を有効にしてください。
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">Anthropic API キー（トレンド・AI分析に使用）</label>
          <div className="input-row">
            <input
              type={showAn ? 'text' : 'password'}
              className="form-input"
              value={anKey}
              onChange={e => setAnKey(e.target.value)}
              placeholder="sk-ant-..."
            />
            <button className="btn btn-ghost" onClick={() => setShowAn(v => !v)}>
              {showAn ? '🙈' : '👁️'}
            </button>
          </div>
          <p className="text-sm text-muted">
            console.anthropic.com で取得。未設定の場合、トレンド調査・AI分析はスキップされます。
          </p>
        </div>

        <button className="btn btn-primary" onClick={saveApiKeys}>保存</button>
      </div>

      {/* Filters */}
      <div className="card section">
        <div className="card-title">🔍 デフォルトフィルター設定</div>

        <div className="grid-2" style={{ gap: 16, marginBottom: 16 }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">調査期間（日）</label>
            <select
              className="form-select"
              value={localFilters.daysBack}
              onChange={e => setLocalFilters(f => ({ ...f, daysBack: +e.target.value }))}
            >
              {[7, 14, 30, 60, 90].map(d => <option key={d} value={d}>{d}日</option>)}
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">最低登録者数</label>
            <input
              type="number"
              className="form-input"
              value={localFilters.minSubscribers}
              onChange={e => setLocalFilters(f => ({ ...f, minSubscribers: +e.target.value }))}
            />
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">最低再生数</label>
            <input
              type="number"
              className="form-input"
              value={localFilters.minViews}
              onChange={e => setLocalFilters(f => ({ ...f, minViews: +e.target.value }))}
            />
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Shorts除外</label>
            <label className="filter-checkbox" style={{ marginTop: 8 }}>
              <input
                type="checkbox"
                checked={localFilters.excludeShorts}
                onChange={e => setLocalFilters(f => ({ ...f, excludeShorts: e.target.checked }))}
              />
              60秒以下の動画を除外する
            </label>
          </div>
        </div>

        <button className="btn btn-primary" onClick={saveFilterSettings}>保存</button>
      </div>

      {/* Data management */}
      <div className="card section">
        <div className="card-title">🗂️ データ管理</div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => { clearLastCheck(); showToast('次回の調査開始で全件取得モードになります', 'success') }}>
            全件再取得（差分リセット）
          </button>
          <button className="btn btn-danger" onClick={handleClearData}>
            チャンネル・バズ履歴をクリア
          </button>
          <button className="btn btn-secondary" onClick={handleResetQuota}>
            Quota使用量をリセット
          </button>
        </div>
      </div>

      {/* Usage guide */}
      <div className="card section">
        <div className="card-title">📚 使い方ガイド</div>
        <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.8 }}>
          <p><strong style={{ color: 'var(--text)' }}>初回起動</strong>: チャンネル管理でチャンネルを追加 → ダッシュボードで「調査開始」</p>
          <p><strong style={{ color: 'var(--text)' }}>2回目以降</strong>: activities.list で差分チェックのみ実施（Quota節約）</p>
          <p><strong style={{ color: 'var(--text)' }}>Quota消費目安</strong>: 初回 20チャンネル ≈ 560 quota / 2回目以降 ≈ 25〜40 quota</p>
          <p><strong style={{ color: 'var(--text)' }}>search.list</strong>（100 quota/回）はチャンネル自動発見にのみ使用します</p>
          <p><strong style={{ color: 'var(--text)' }}>Anthropicキー未設定</strong>の場合、トレンド調査・AI企画案生成はスキップされます</p>
        </div>
      </div>
    </div>
  )
}
