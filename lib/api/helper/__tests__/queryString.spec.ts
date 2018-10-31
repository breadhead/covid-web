import { queryString } from '../queryString'

describe('queryString', () => {
  test('should create empty string for empty query', () => {
    expect(
      queryString(),
    ).toBe('')
  })

  test('should create empty string for empty with empty values', () => {
    expect(
      queryString({
        from: null,
      }),
    ).toBe('')
  })

  test('should create query string for one string values', () => {
    expect(
      queryString({
        from: 'Tomsk',
      }),
    ).toBe('from=Tomsk')
  })

  test('should create query string for many string values', () => {
    expect(
      queryString({
        from: 'Tomsk',
        to: 'Spb',
      }),
    ).toBe('from=Tomsk&to=Spb')
  })

  test('should create query string for string value with spaces', () => {
    expect(
      queryString({
        to: 'Saint Petersburg',
      }),
    ).toBe('to=Saint%20Petersburg')
  })

  test('should create query string for number value', () => {
    expect(
      queryString({
        to: 2111,
      }),
    ).toBe('to=2111')
  })

  test('should create query string for date value', () => {
    expect(
      queryString({
        to: new Date('2018-01-02'),
      }),
    ).toBe('to=2018-01-02T00%3A00%3A00.000Z')
  })
})
