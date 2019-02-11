import { size } from 'lodash'
import { getDateInSeconds } from './getDateInSeconds'
import { getValidators } from './getValidators'
import { DateInterface } from './types'

const validateDates = (dates: DateInterface[]) => {
  let errorMessage

  const datesInSeconds = dates.map(getDateInSeconds)

  getValidators(size(dates)).some(validator => {
    const errorCode = validator(datesInSeconds)
    if (errorCode) {
      errorMessage = errorCode
      return true
    }
    return false
  })

  return errorMessage
}

export { validateDates }
