import { type ListItem } from './panel'

export enum ResStatus {
  SUCCESS = 200,
  ERROR = 500,
  NOT_FOUND = 404
}

// 统一接口出参
export interface IResponse {
  code: ResStatus
  msg: string
  data: ListItem[]
}