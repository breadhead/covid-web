import dayjs from 'dayjs'
import { ErrorCode } from '../erorCodes'
import { validateDates } from '../validateDates'

describe('validateDates works', () => {
  test('should return correct error code if date1 or date2 is in the future', () => {
    expect(
      validateDates(
        {
          year: dayjs()
            .add(5000, 'day')
            .year(),
          month: '5',
        },
        { year: '2017', month: '5' },
      ),
    ).toBe(ErrorCode.FutureDate)
  })
  test('should return correct error code if date1 is greater than date2', () => {
    expect(
      validateDates({ year: '2018', month: '5' }, { year: '2017', month: '5' }),
    ).toBe(ErrorCode.MixedDateOrder)
  })
  test('should return correct error code if date1 is greater than date2', () => {
    expect(
      validateDates({ year: '2017', month: '5' }, { year: '2016', month: '5' }),
    ).toBe(ErrorCode.MixedDateOrder)
  })
  test('should return undefined if date2 is greater than date1', () => {
    expect(
      validateDates({ year: '2017', month: '5' }, { year: '2018', month: '5' }),
    ).toBe(undefined)
  })
  test('should return undefined if date2 is equal to date1', () => {
    expect(
      validateDates({ year: '2018', month: '5' }, { year: '2018', month: '5' }),
    ).toBe(undefined)
  })
})
