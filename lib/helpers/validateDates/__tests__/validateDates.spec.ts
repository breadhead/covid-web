import { validateDates } from '../validateDates'
describe('validateDates works', () => {
  test('should return false if date1 is greater than date2', () => {
    expect(
      validateDates({ year: '2018', month: '5' }, { year: '2017', month: '5' }),
    ).toBe(false)
  })
  test('should return false if date1 is greater than date2', () => {
    expect(
      validateDates({ year: '2017', month: '5' }, { year: '2016', month: '5' }),
    ).toBe(false)
  })
  test('should return true if date2 is greater than date1', () => {
    expect(
      validateDates({ year: '2017', month: '5' }, { year: '2018', month: '5' }),
    ).toBe(true)
  })
  test('should return true if date2 is equal to date1', () => {
    expect(
      validateDates({ year: '2018', month: '5' }, { year: '2018', month: '5' }),
    ).toBe(true)
  })
})
