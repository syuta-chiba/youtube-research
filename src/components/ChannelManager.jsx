import { useState } from 'react'
import { saveChannels } from '../utils/storage.js'
import { addChannelByUrlOrId, discoverChannels, fetchChannelDetails } from '../agents/youtubeAgent.js'
import { exportChannelsCsv } from '../utils/csvExporter.js'
import { getYouTubeApiKey } from '../utils/storage.js'
import { DEFAULT_KEYWORDS } from '../config.js'

function fmt(n) { return Number(n).toLocaleString() }

export default function ChannelManager({ channels, onChannelsChange, showToast }) {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [discoverKeyword, setDiscoverKeyword] = useState('')
  const [discoverResults, setDiscoverResults] = useState([])
  const [discovering, setDiscovering] = useState(false)
  const [selected, setSelected] = useState(new Set())

  function requireApiKey() {
    const key = getYouTubeApiKey()
    if (!key) { showToast('先に設定タブでYouTube APIキーを設定してください', 'error'); return null }
    return key
  }

  async function handleManualAdd() {
    if (!input.trim()) return
    const key = requireApiKey(); if (!key) return
    setLoading(true)
    try {
      const ch = await addChannelByUrlOrId(key, input.trim())
      if (channels.some(c => c.channelId === ch.channelId)) {
        showToast('このチャンネルはすでに登録されています', 'error'); return
      }
      const updated = [...channels, ch]
      saveChannels(updated)
      onChannelsChange(updated)
      setInput('')
      showToast(`「${ch.name}」を追加しました`, 'success')
    } catch (e) {
      showToast(e.message, 'error')
    } finally {
      setLoading(false)
    }
  }

  async function handleDiscover() {
    const key = requireApiKey(); if (!key) return
    const kws = discoverKeyword.trim()
      ? [discoverKeyword.trim()]
      : DEFAULT_KEYWORDS.slice(0, 3)
    setDiscovering(true)
    try {
      const found = await discoverChannels(key, kws)
      // Fetch details for found channels
      const ids = found.map(c => c.channelId)
      const details = await fetchChannelDetails(key, ids)
      // Mark already-added channels
      const existing = new Set(channels.map(c => c.channelId))
      setDiscoverResults(details.map(ch => ({
        ...ch,
        uploadsPlaylistId: ch.uploadsPlaylistId,
        addedAt: new Date().toISOString(),
        source: 'auto',
        lastChecked: null,
        alreadyAdded: existing.has(ch.channelId),
      })))
      showToast(`${details.length}件のチャンネルが見つかりました`, 'info')
    } catch (e) {
      showToast(e.message, 'error')
    } finally {
      setDiscovering(false)
    }
  }

  function toggleSelect(id) {
    setSelected(s => {
      const n = new Set(s)
      n.has(id) ? n.delete(id) : n.add(id)
      return n
    })
  }

  function addSelected() {
    const toAdd = discoverResults.filter(r => selected.has(r.channelId) && !r.alreadyAdded)
    if (!toAdd.length) { showToast('追加するチャンネルを選択してください', 'error'); return }
    const updated = [...channels, ...toAdd]
    saveChannels(updated)
    onChannelsChange(updated)
    setDiscoverResults([])
    setSelected(new Set())
    showToast(`${toAdd.length}件のチャンネルを追加しました`, 'success')
  }

  function removeChannel(id) {
    const updated = channels.filter(c => c.channelId !== id)
    saveChannels(updated)
    onChannelsChange(updated)
    showToast('チャンネルを削除しました', 'info')
  }

  return (
    <div>
      <div className="section-header">
        <h2 className="section-title">📺 チャンネル管理</h2>
        <button className="btn btn-secondary" onClick={() => exportChannelsCsv(channels)} disabled={!channels.length}>
          📥 CSV出力
        </button>
      </div>

      {/* Manual add */}
      <div className="card section">
        <div className="card-title">手動追加</div>
        <div className="input-row">
          <input
            type="text"
            className="form-input"
            placeholder="YouTube チャンネルURL または チャンネルID (UC...)"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleManualAdd()}
          />
          <button className="btn btn-primary" onClick={handleManualAdd} disabled={loading || !input.trim()}>
            {loading ? <span className="spinner" /> : '追加'}
          </button>
        </div>
        <p className="text-sm text-muted" style={{ marginTop: 6 }}>
          例: https://www.youtube.com/@channelname / https://www.youtube.com/channel/UC...
        </p>
      </div>

      {/* Auto discover */}
      <div className="card section">
        <div className="card-title">🔍 自動発見（search.list: 100 quota/検索）</div>
        <div className="input-row">
          <input
            type="text"
            className="form-input"
            placeholder="検索キーワード（空白でデフォルトキーワードを使用）"
            value={discoverKeyword}
            onChange={e => setDiscoverKeyword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleDiscover()}
          />
          <button className="btn btn-secondary" onClick={handleDiscover} disabled={discovering}>
            {discovering ? <><span className="spinner" /> 検索中…</> : '🔍 検索'}
          </button>
        </div>
        <p className="text-sm text-muted" style={{ marginTop: 6 }}>
          デフォルトキーワード: {DEFAULT_KEYWORDS.slice(0,3).join(' / ')} など
        </p>

        {discoverResults.length > 0 && (
          <div style={{ marginTop: 16 }}>
            <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
              <span className="text-sm text-muted">{discoverResults.length}件見つかりました</span>
              <button className="btn btn-primary" onClick={addSelected} disabled={!selected.size}>
                選択した{selected.size}件を追加
              </button>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>選択</th>
                    <th>アイコン</th>
                    <th>チャンネル名</th>
                    <th>登録者数</th>
                    <th>状態</th>
                  </tr>
                </thead>
                <tbody>
                  {discoverResults.map(r => (
                    <tr key={r.channelId}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selected.has(r.channelId)}
                          disabled={r.alreadyAdded}
                          onChange={() => toggleSelect(r.channelId)}
                          style={{ accentColor: 'var(--accent)' }}
                        />
                      </td>
                      <td>
                        {r.thumbnailUrl
                          ? <img src={r.thumbnailUrl} alt="" className="channel-avatar" />
                          : <div className="channel-avatar" style={{ background: 'var(--bg3)' }} />
                        }
                      </td>
                      <td>
                        <div className="channel-name">{r.name}</div>
                        <div className="channel-id">{r.channelId}</div>
                      </td>
                      <td>{fmt(r.subscriberCount)}</td>
                      <td>
                        {r.alreadyAdded
                          ? <span className="badge badge-good">登録済み</span>
                          : <span className="badge badge-accent">新規</span>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Channel list */}
      <div className="card">
        <div className="card-title">登録チャンネル一覧 ({channels.length}件)</div>
        {channels.length === 0 ? (
          <div className="empty-state" style={{ padding: '30px 20px' }}>
            <div className="empty-state-desc">チャンネルがまだ登録されていません</div>
          </div>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>アイコン</th>
                  <th>チャンネル名</th>
                  <th>登録者数</th>
                  <th>ソース</th>
                  <th>追加日</th>
                  <th>最終チェック</th>
                  <th>削除</th>
                </tr>
              </thead>
              <tbody>
                {channels.map(ch => (
                  <tr key={ch.channelId}>
                    <td>
                      {ch.thumbnailUrl
                        ? <img src={ch.thumbnailUrl} alt="" className="channel-avatar" />
                        : <div className="channel-avatar" style={{ background: 'var(--bg3)' }} />
                      }
                    </td>
                    <td>
                      <div className="channel-name">{ch.name}</div>
                      <div className="channel-id">{ch.channelId}</div>
                    </td>
                    <td>{ch.subscriberCount ? fmt(ch.subscriberCount) : '非公開'}</td>
                    <td>
                      <span className={`badge ${ch.source === 'auto' ? 'badge-accent' : 'badge-normal'}`}>
                        {ch.source === 'auto' ? '自動' : '手動'}
                      </span>
                    </td>
                    <td className="text-sm text-muted">
                      {ch.addedAt ? new Date(ch.addedAt).toLocaleDateString('ja-JP') : '-'}
                    </td>
                    <td className="text-sm text-muted">
                      {ch.lastChecked ? new Date(ch.lastChecked).toLocaleDateString('ja-JP') : '未チェック'}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        style={{ padding: '4px 10px', fontSize: 12 }}
                        onClick={() => removeChannel(ch.channelId)}
                      >
                        削除
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
