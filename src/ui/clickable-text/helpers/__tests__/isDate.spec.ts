import { isDate } from '../isDate'

describe('isDate', () => {
  test('should return true for regular date', () => {
    const date = '06.16.2019'

    expect(isDate(date)).toBeTruthy()
  })

  test('should return true for date with /', () => {
    const date = '06/16/2019'

    expect(isDate(date)).toBeTruthy()
  })

  test('should return true for with short year', () => {
    const date = '06.16.19'

    expect(isDate(date)).toBeTruthy()
  })

  test('should return true for date without year', () => {
    const date = '06.16'

    expect(isDate(date)).toBeTruthy()
  })

  test('should return true for reverse date', () => {
    const date = '2019.04.17'

    expect(isDate(date)).toBeTruthy()
  })

  test('should return true for reverse date with short year', () => {
    const date = '19.04.17'

    expect(isDate(date)).toBeTruthy()
  })
})
