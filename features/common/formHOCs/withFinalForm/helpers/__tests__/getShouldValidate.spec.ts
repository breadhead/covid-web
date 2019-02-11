import { getShouldValidate } from '../getShouldValidate'

describe('getShouldValidate', () => {
  test('should return false if is active, isnt submitFailed', () => {
    expect(
      getShouldValidate({
        active: true,
        submitFailed: false,
        touched: true,
        pristine: true,
      }),
    ).toBe(false)
  })
  test('should return true if field isnt active and submitFailed', () => {
    expect(
      getShouldValidate({
        active: false,
        submitFailed: true,
        touched: true,
        pristine: true,
      }),
    ).toBe(true)
  })
  test('should return true if field isnt active, isnt submitFailed, touched and pristine', () => {
    expect(
      getShouldValidate({
        active: false,
        submitFailed: false,
        touched: true,
        pristine: true,
      }),
    ).toBe(false)
  })
  test('should return false if field isnt active, isnt submitFailed, isnt touched and pristine', () => {
    expect(
      getShouldValidate({
        active: false,
        submitFailed: false,
        touched: false,
        pristine: true,
      }),
    ).toBe(false)
  })
  test('should return if eager validation is true', () => {
    expect(
      getShouldValidate({
        eagerValidation: true,
        active: false,
        submitFailed: false,
        touched: false,
        pristine: true,
      }),
    ).toBe(true)
  })
})
