import dayjs from 'dayjs'
import { checkForFutureDatesError } from '../checkForFutureDate'
import { ErrorCode } from '../erorCodes'

describe('checkForFutureDates works', () => {
  test('should return correct error code if date1 is in the future', () => {
    const date1 = dayjs()
      .add(5000, 'day')
      .valueOf()
    const date2 = dayjs('2018-01-18').valueOf()
    expect(checkForFutureDatesError(date1, date2)).toBe(ErrorCode.FutureDate)
  })
  test('should return correct error code if date2 is in the future', () => {
    const date1 = dayjs('2018-01-18').valueOf()
    const date2 = dayjs()
      .add(1, 'day')
      .valueOf()
    expect(checkForFutureDatesError(date1, date2)).toBe(ErrorCode.FutureDate)
  })
  test('should return undefined if both dates are in the past', () => {
    const date1 = dayjs()
      .subtract(100, 'day')
      .valueOf()
    const date2 = dayjs()
      .subtract(500, 'day')
      .valueOf()
    expect(checkForFutureDatesError(date1, date2)).toBe(undefined)
  })
})
