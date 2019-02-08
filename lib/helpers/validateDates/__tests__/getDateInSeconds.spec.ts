import { getDateInSeconds } from '../getDateInSeconds'

describe('getDateInSeconds works', () => {
  test('should return a correct date', () => {
    expect(getDateInSeconds({ year: 2018, month: 1 })).toBe(1514757600000)
  })
})
