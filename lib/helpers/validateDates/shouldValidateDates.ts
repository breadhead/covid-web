import { DateInterface } from './getDateInSeconds'

const shouldValidateDates = (date1: DateInterface, date2: DateInterface) => {
  const datesArePresent = !!(
    date1 &&
    date1.year &&
    date1.month &&
    date2 &&
    date2.year &&
    date2.month
  )

  return datesArePresent
}

export { shouldValidateDates }
