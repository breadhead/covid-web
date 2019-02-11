import { ErrorCode } from './erorCodes'

export type Validator = (date1: number, date2: number) => ErrorCode | undefined
type DateType = number | string
export interface DateInterface {
  year: DateType
  month: DateType
  day?: DateType
}
