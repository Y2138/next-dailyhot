import { ListItem, ListProps } from '@/types/panel'
import { Badge } from '@/components/ui/badge'
import {Avatar, AvatarImage, AvatarFallback} from '@/components/ui/avatar'
import PanelItem from './panelItem'
import { IResponse } from '@/types/common'
import { ScrollArea } from "@/components/ui/scroll-area"

export async function Panel(props: ListProps) {
  const { routeKey, name, rankName, icon } = props
  let isError = false

  // 请求路由接口获取榜单数据
  let listItems: ListItem[] = []
  try {
    const response = await fetch(`http://localhost:3000/api/${routeKey}`, {
      cache: 'no-store'
    })
    if (response.status === 200) {
      const { data, code }: IResponse = await response.json()
      isError = false
      listItems = data
    }
  } catch (error) {
    console.log('请求失败--->', error)
    isError = true
  }


  return (
    <div className='bg-background shadow-md rounded-md p-2 w-[100%] md:w-[25%] lg:w-[33%]'>
      { isError ? <div>暂无数据</div> :
        <>
          <div className='flex justify-between items-center'>
            <div className="flex flex-shrink-0 gap-2 items-center">
              <Avatar className='w-[30px] h-[30px]'>
                <AvatarImage src={icon}></AvatarImage>
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <h2 className='text-xl font-bold'>{name}</h2>
            </div>
            <Badge variant='secondary'>{rankName}</Badge>
          </div>
          <ScrollArea className='max-h-[488px] flex flex-col gap-2 pt-1 divide-y'>
            {
              (listItems || []).map((item, index) => {
                return <PanelItem key={index} text={item.title} url={item.url} index={index} />
              })
            }
          </ScrollArea>
        </>
      }
    </div>
  )
}


export const revalidate = 60