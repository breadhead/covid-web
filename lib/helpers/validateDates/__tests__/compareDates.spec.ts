import dayjs from 'dayjs'
import { compareDates } from '../compareDates'

describe('validateDates works', () => {
  test('should ', () => {
    const date1 = dayjs('2015-01-18').valueOf()
    const date2 = dayjs('2018-01-18').valueOf()

    expect(compareDates(date1, date2)).toBe(true)
  })
})
