import { NextResponse } from "next/server"
import { ListItem } from '@/types/panel'

export async function GET(request: Request) {
  // 官方api
  const url = 'https://api.zhihu.com/topstory/hot-list'
  try {
    const response = await fetch(url, {
      cache: 'no-store'
    })
    if (!response.ok) {
      throw new Error('Network response was not ok [zhihu]')
    }
    const responseBody = await response.json()
    // 处理数据
    if (responseBody.data) {
      const result: ListItem[] = responseBody.data.map((item: Record<string, any>) => {
        return {
          id: item.id,
          title: item.target.title,
          // desc: key,
          
          hot: parseInt(item.detail_text.replace(/[^\d]/g, '')) * 10000,
          // label: item.label_name,
          url: `https://www.zhihu.com/question/${item.target.id}`
        }
      })
      console.log('请求结果-->', result)
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