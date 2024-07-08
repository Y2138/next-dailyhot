'use client'
import { useState, useEffect } from 'react'
import ThemeToggle from './themeToggle'
import Dayjs from 'dayjs'
import { Button } from "@/components/ui/button"
import { RefreshCcw } from "lucide-react"

export default function HotHeader() {
  const [ datetime, setDatetime ] = useState<string>('')
  const [ refreshTime, setRefreshTime ] = useState<string>('')
  useEffect(() => {
    const curTime = Dayjs().format('YYYY-MM-DD HH:mm:ss')
    setRefreshTime(curTime)
    setDatetime(curTime)
    const interval = setInterval(() => {
      setDatetime(Dayjs().format('YYYY-MM-DD HH:mm:ss'))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleRefresh = () => {
    window.location.reload()
  }
  return (
    <header className="px-[5%] py-[10px] flex items-center justify-between shadow">
      <div className="text-2xl">今日热点</div>
      <div className='text-center'>
        <h2>当前时间: {datetime}</h2>
        <h5 className='text-xs text-primary'>数据更新时间: {refreshTime}</h5>
      </div>
      <div>
        <Button variant="outline" size="icon" onClick={handleRefresh}>
          <RefreshCcw />
        </Button>
        <ThemeToggle></ThemeToggle>
      </div>
    </header>
  )
}