import { compareDates } from './compareDates'
import { DateInterface, getDateInSeconds } from './getDateInSeconds'

const validateDates = (
  date1: DateInterface,
  date2: DateInterface,
  message: string,
) => {
  const datesValid = compareDates(
    getDateInSeconds(date1),
    getDateInSeconds(date2),
  )
  if (!datesValid) {
    return message
  }
}

export { validateDates }
