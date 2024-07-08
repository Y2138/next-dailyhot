export type ListItem = {
  id: number | string;
  // 标题
  title: string;
  // 描述
  desc: string;
  // 跳转链接
  url: string;
  // 标签
  label?: string;
  // 图标
  avatar?: string;
}

export enum Website {
  WEIBO = 'weibo',
  ZHIHU = 'zhihu'
}

export type ListProps = {
  routeKey: Website; // 网站标识
  name: string; // 名称
  icon: string; // 图表
  rankName: string; // 排行榜名称(各家不同)
}