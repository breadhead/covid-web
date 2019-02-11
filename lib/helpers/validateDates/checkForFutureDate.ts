import { ErrorCode } from './erorCodes'
import { Validator } from './types'

const checkForFutureDatesError: Validator = (date1, date2) => {
  const now = Date.now()
  const noFutureDate = date1 <= now && date2 <= now
  return noFutureDate ? undefined : ErrorCode.FutureDate
}

export { checkForFutureDatesError }
