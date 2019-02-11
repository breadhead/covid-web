import { ErrorCode } from './erorCodes'

export type Validator = (date1: number, date2: number) => ErrorCode | undefined
