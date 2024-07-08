import { NextResponse } from "next/server"
import { ListItem } from '@/types/panel'

export async function GET(request: Request) {
  // 官方api
  const url = 'https://weibo.com/ajax/side/hotSearch'
  try {
    const response = await fetch(url, {
      cache: 'no-store'
    })

    if (!response.ok) {
      throw new Error('Network response was not ok [weibo]')
    }
    const responseBody = await response.json()
    // 处理数据
    if (responseBody.ok === 1) {
      const result: ListItem[] = responseBody.data.realtime.map((item: Record<string, any>) => {
        const key = item.word_scheme ? item.word_scheme : `#${item.word}`
        return {
          id: item.mid,
          title: item.word,
          desc: key,
          hot: item.raw_hot,
          label: item.label_name,
          url: `https://s.weibo.com/weibo?q=${encodeURIComponent(key)}&t=31&band_rank=1&Refer=top`
        }
      })
      // console.log('请求结果----> ', result)
      return NextResponse.json({
        code: 200,
        msg: '请求成功',
        data: result
      })
    } else {
      return NextResponse.json({
        code: 500,
        msg: '请求失败'
      }) 
    }
  } catch (error) {
    return NextResponse.json({
      code: 500,
      msg: '请求失败'
    }) 
  }
}