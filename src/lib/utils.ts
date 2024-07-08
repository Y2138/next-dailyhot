import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { ListItem, IResponse } from '@/types/panel'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export const resSuccess = (list?: ListItem[]): IResponse => ({
//   msg: 
// })
