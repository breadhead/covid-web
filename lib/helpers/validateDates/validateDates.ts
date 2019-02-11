import { checkForFutureDatesError } from './checkForFutureDate'
import { compareDates } from './compareDates'
import { getDateInSeconds } from './getDateInSeconds'
import { DateInterface, Validator } from './types'

const validateDates = (validators: Validator[]) => (
  date1: DateInterface,
  date2: DateInterface,
) => {
  let errorMessage
  const date1InSeconds = getDateInSeconds(date1)
  const date2InSeconds = getDateInSeconds(date2)

  validators.some(validator => {
    const errorCode = validator(date1InSeconds, date2InSeconds)
    if (errorCode) {
      errorMessage = errorCode
      return true
    }
    return false
  })

  return errorMessage
}

const validateDatesCurried = validateDates([
  checkForFutureDatesError,
  compareDates,
])

export { validateDatesCurried as validateDates }
