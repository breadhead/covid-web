import dayjs from 'dayjs'
import { range } from 'lodash'

export const getYears = (amount: number) => {
  const currentYear = dayjs().year()
  const indexesList = range(amount)
  const years = indexesList.map(index => {
    const year = currentYear - index
    return {
      key: `${year}`,
      label: `${year}`,
    }
  })
  return years
}
