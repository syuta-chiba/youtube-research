import { useState, useEffect } from 'react'
import { getQuotaStatus, onQuotaChange, resetQuota } from '../utils/quotaManager.js'

export default function QuotaBar() {
  const [status, setStatus] = useState(getQuotaStatus())

  useEffect(() => {
    const unsub = onQuotaChange(() => setStatus(getQuotaStatus()))
    return unsub
  }, [])

  return (
    <div className="quota-bar">
      <span className="quota-label">Quota</span>
      <div className="quota-progress">
        <div
          className={`quota-fill ${status.isWarning ? 'warning' : ''} ${status.isExceeded ? 'exceeded' : ''}`}
          style={{ width: `${status.percentage}%` }}
        />
      </div>
      <span className={`quota-text ${status.isWarning ? 'warning' : ''}`}>
        {status.used.toLocaleString()} / {status.limit.toLocaleString()}
      </span>
      <button className="quota-reset" onClick={resetQuota} title="リセット">↺</button>
    </div>
  )
}
