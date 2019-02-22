import { getDateString } from '../getDateString'

describe('makeDateString works', () => {
  test('returns correct date string', () => {
    expect(getDateString({ year: 2017, month: 1, day: 29 })).toBe('2017-1-29')
  })
  test('returns correct date string if day isnt passed', () => {
    expect(getDateString({ year: 2017, month: 1 })).toBe('2017-1-1')
  })
})
