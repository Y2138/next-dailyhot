import { Panel } from "@/components/panel/panel";
import { Website, type ListProps } from "@/types/panel";

const PageConfig: ListProps[] = [
  {
    routeKey: Website.WEIBO,
    name: '微博',
    rankName: '热搜榜',
    icon: 'https://pic3.zhimg.com/100/v2-8054b511a4e4aa383c44980239239a16_r.jpg',
  },
  {
    routeKey: Website.ZHIHU,
    name: '知乎',
    rankName: '热榜',
    icon: 'https://static.zhihu.com/heifetz/favicon.ico',
  }
]

export default function Page() {
  return (
    <div className='flex gap-4 flex-wrap'>
      {PageConfig.map((item, index) => {
        return <Panel key={index} {...item}></Panel>
      })}
    </div>
  );
}