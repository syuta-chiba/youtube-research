import { useState, useEffect, useCallback } from 'react'
import Dashboard from './components/Dashboard.jsx'
import ChannelManager from './components/ChannelManager.jsx'
import BuzzRanking from './components/BuzzRanking.jsx'
import TrendReport from './components/TrendReport.jsx'
import VideoIdeas from './components/VideoIdeas.jsx'
import Settings from './components/Settings.jsx'
import QuotaBar from './components/QuotaBar.jsx'
import {
  getChannels, saveChannels, getLastCheck, saveLastCheck,
  getBuzzHistory, saveBuzzHistory, getFilters, saveFilters,
  getYouTubeApiKey, getAnthropicApiKey,
} from './utils/storage.js'
import {
  fetchChannelDetails, fetchRecentVideos,
  checkNewActivities, fetchVideoDetails,
} from './agents/youtubeAgent.js'
import { fetchTrends } from './agents/trendAgent.js'
import { analyzeResults } from './agents/analysisAgent.js'
import { DEFAULT_FILTERS } from './config.js'

const TABS = [
  { id: 'dashboard', label: 'ダッシュボード', icon: '📊' },
  { id: 'channels', label: 'チャンネル管理', icon: '📺' },
  { id: 'buzz', label: 'バズ動画', icon: '🔥' },
  { id: 'trends', label: 'トレンド', icon: '📈' },
  { id: 'ideas', label: '企画案', icon: '💡' },
  { id: 'settings', label: '設定', icon: '⚙️' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [channels, setChannels] = useState([])
  const [buzzVideos, setBuzzVideos] = useState([])
  const [trendData, setTrendData] = useState(null)
  const [analysisData, setAnalysisData] = useState(null)
  const [lastCheck, setLastCheck] = useState(null)
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [isResearching, setIsResearching] = useState(false)
  const [toast, setToast] = useState(null)

  // Load from storage on mount
  useEffect(() => {
    const loaded = getChannels()
    setChannels(loaded)
    setLastCheck(getLastCheck())
    setFilters(getFilters())
    const today = new Date().toISOString().slice(0, 10)
    const history = getBuzzHistory(today)
    if (history?.videos) setBuzzVideos(history.videos)
    if (history?.trendData) setTrendData(history.trendData)
    if (history?.analysisData) setAnalysisData(history.analysisData)

    // サムネイルが未取得のチャンネルがあればAPIキーで補完
    const ytKey = getYouTubeApiKey()
    if (ytKey && loaded.some(c => !c.thumbnailUrl)) {
      fetchChannelDetails(ytKey, loaded.map(c => c.channelId))
        .then(details => {
          const detailMap = Object.fromEntries(details.map(d => [d.channelId, d]))
          const updated = loaded.map(c => ({
            ...c,
            thumbnailUrl: detailMap[c.channelId]?.thumbnailUrl || c.thumbnailUrl,
            subscriberCount: detailMap[c.channelId]?.subscriberCount ?? c.subscriberCount,
            uploadsPlaylistId: detailMap[c.channelId]?.uploadsPlaylistId || c.uploadsPlaylistId,
          }))
          saveChannels(updated)
          setChannels(updated)
        })
        .catch(() => {})
    }
  }, [])

  const showToast = useCallback((message, type = 'info') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 4000)
  }, [])

  // デスクトップ通知の許可をリクエスト
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission()
    }
  }, [])

  const sendNotification = useCallback((title, body) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, { body, icon: '/favicon.ico' })
    }
  }, [])

  const handleStartResearch = useCallback(async () => {
    const ytKey = getYouTubeApiKey()
    if (!ytKey) { showToast('YouTube APIキーが設定されていません。設定タブで登録してください。', 'error'); return }
    if (channels.length === 0) { showToast('チャンネルが登録されていません。', 'error'); return }

    setIsResearching(true)
    const anKey = getAnthropicApiKey()
    const now = new Date().toISOString()
    let newVideos = []

    try {
      const deltaMode = !!lastCheck

      if (deltaMode) {
        // --- 差分チェックモード (activities.list) ---
        showToast('差分チェックモード: 新着動画を確認中…', 'info')
        const channelIds = channels.map(c => c.channelId)
        const activitiesMap = await checkNewActivities(ytKey, channelIds, lastCheck)

        const allNewIds = Object.values(activitiesMap).flat()
        if (allNewIds.length > 0) {
          showToast(`${allNewIds.length}件の新着動画を取得中…`, 'info')
          const channelMap = Object.fromEntries(channels.map(c => [c.channelId, { subscriberCount: c.subscriberCount, name: c.name }]))
          newVideos = await fetchVideoDetails(ytKey, allNewIds, channelMap)
        } else {
          showToast('新着動画はありません', 'info')
        }

        // Merge with existing videos, deduplicate
        const today = new Date().toISOString().slice(0, 10)
        const existing = getBuzzHistory(today)?.videos || buzzVideos
        const existingIds = new Set(existing.map(v => v.videoId))
        const merged = [...existing, ...newVideos.filter(v => !existingIds.has(v.videoId))]
        merged.sort((a, b) => b.buzzRatio - a.buzzRatio)
        newVideos = merged
      } else {
        // --- 全件取得モード ---
        showToast('全件取得モード: チャンネル情報を取得中…', 'info')
        const channelIds = channels.map(c => c.channelId)
        const channelDetails = await fetchChannelDetails(ytKey, channelIds)

        // Merge subscriber counts back into channels
        const detailMap = Object.fromEntries(channelDetails.map(c => [c.channelId, c]))
        const updatedChannels = channels.map(c => ({
          ...c,
          subscriberCount: detailMap[c.channelId]?.subscriberCount ?? c.subscriberCount,
          uploadsPlaylistId: detailMap[c.channelId]?.uploadsPlaylistId ?? c.uploadsPlaylistId,
        }))
        saveChannels(updatedChannels)
        setChannels(updatedChannels)

        showToast('動画データを取得中…', 'info')
        newVideos = await fetchRecentVideos(ytKey, channelDetails, filters)
      }

      setBuzzVideos(newVideos)

      // Update lastChecked on channels
      const updatedChannels = channels.map(c => ({ ...c, lastChecked: now }))
      saveChannels(updatedChannels)
      setChannels(updatedChannels)

      // Parallel: fetch trends (optional)
      let trends = null
      if (anKey) {
        try {
          showToast('トレンドデータを取得中…', 'info')
          trends = await fetchTrends(anKey, [])
          setTrendData(trends)
        } catch (e) {
          console.warn('Trend fetch failed:', e)
          showToast(`トレンド取得に失敗: ${e.message}`, 'error')
        }
      }

      // AI analysis (optional)
      let analysis = null
      if (anKey && newVideos.length > 0) {
        try {
          showToast('AI分析中…', 'info')
          analysis = await analyzeResults(anKey, newVideos, trends || {}, { subscriberCount: 1434 })
          setAnalysisData(analysis)
        } catch (e) {
          console.warn('Analysis failed:', e)
          showToast(`AI分析に失敗: ${e.message}`, 'error')
        }
      }

      // Save to history
      const today = new Date().toISOString().slice(0, 10)
      saveBuzzHistory(today, { videos: newVideos, trendData: trends, analysisData: analysis })
      saveLastCheck(now)
      setLastCheck(now)

      showToast(`調査完了！${newVideos.length}件のバズ動画を検出しました`, 'success')
      sendNotification('🎯 調査完了', `${newVideos.length}件のバズ動画を検出しました`)
    } catch (e) {
      console.error('Research error:', e)
      showToast(`エラー: ${e.message}`, 'error')
      sendNotification('⚠️ 調査エラー', e.message)
    } finally {
      setIsResearching(false)
    }
  }, [channels, lastCheck, filters, buzzVideos, showToast, sendNotification])

  function handleFiltersChange(newFilters) {
    setFilters(newFilters)
    saveFilters(newFilters)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <h1 className="app-title">🎯 YouTube バズネタ発掘</h1>
          <span className="app-subtitle">プログラミング系チャンネル向けリサーチエージェント</span>
        </div>
        <div className="header-right">
          <QuotaBar />
        </div>
      </header>

      <nav className="tab-nav">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </nav>

      <main className="app-main">
        {activeTab === 'dashboard' && (
          <Dashboard
            channels={channels}
            buzzVideos={buzzVideos}
            trendData={trendData}
            analysisData={analysisData}
            lastCheck={lastCheck}
            isResearching={isResearching}
            onStartResearch={handleStartResearch}
            onTabChange={setActiveTab}
          />
        )}
        {activeTab === 'channels' && (
          <ChannelManager
            channels={channels}
            onChannelsChange={setChannels}
            showToast={showToast}
          />
        )}
        {activeTab === 'buzz' && (
          <BuzzRanking
            videos={buzzVideos}
            filters={filters}
            onFiltersChange={handleFiltersChange}
          />
        )}
        {activeTab === 'trends' && (
          <TrendReport trendData={trendData} />
        )}
        {activeTab === 'ideas' && (
          <VideoIdeas analysisData={analysisData} />
        )}
        {activeTab === 'settings' && (
          <Settings
            filters={filters}
            onFiltersChange={handleFiltersChange}
            showToast={showToast}
          />
        )}
      </main>

      {toast && (
        <div className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      )}
    </div>
  )
}
