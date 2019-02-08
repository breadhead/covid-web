import dayjs from 'dayjs'
import { getDateString } from './getDateString'
type DateType = number | string

export interface DateInterface {
  year: DateType
  month: DateType
  day?: DateType
}

const getDateInSeconds = (date: DateInterface) => {
  return dayjs(getDateString(date)).valueOf()
}

export { getDateInSeconds }
