import { ErrorCode } from './erorCodes'
import { Validator } from './types'

const compareDates: Validator = (date1, date2) => {
  return date2 >= date1 ? undefined : ErrorCode.MixedDateOrder
}

export { compareDates }
