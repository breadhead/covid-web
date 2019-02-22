import { shouldValidateDates } from '../shouldValidateDates'
import { DateInterface } from '../types'

describe('shouldValidateDates works', () => {
  test('should return true if dates are correct', () => {
    expect(
      shouldValidateDates([{ year: 2018, month: 1 }, { year: 2019, month: 1 }]),
    ).toBe(true)
  })
  test('should return false if dates arent correct', () => {
    expect(
      shouldValidateDates([
        { year: 2018 } as DateInterface,
        {
          year: 2019,
          month: 1,
        },
      ]),
    ).toBe(false)
  })
})
