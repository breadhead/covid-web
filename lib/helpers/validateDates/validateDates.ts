import { compareDates } from './compareDates'
import { DateInterface, getDateInSeconds } from './getDateInSeconds'

const validateDates = (date1: DateInterface, date2: DateInterface) => {
  const datesValid = compareDates(
    getDateInSeconds(date1),
    getDateInSeconds(date2),
  )
  return datesValid
}

export { validateDates }
