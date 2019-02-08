import { validateDates } from '../validateDates'
describe('validateDates works', () => {
  test('should return error message if date1 is greater than date2', () => {
    expect(
      validateDates(
        { year: '2018', month: '5' },
        { year: '2017', month: '5' },
        'дата1 больше даты2',
      ),
    ).toBe('дата1 больше даты2')
  })
  test('should return undefined if date2 is greater than date1', () => {
    expect(
      validateDates(
        { year: '2017', month: '5' },
        { year: '2018', month: '5' },
        'дата1 больше даты2',
      ),
    ).toBe(undefined)
  })
  test('should return undefined if date2 is equal to date1', () => {
    expect(
      validateDates(
        { year: '2018', month: '5' },
        { year: '2018', month: '5' },
        'дата1 больше даты2',
      ),
    ).toBe(undefined)
  })
})
