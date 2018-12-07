import { numberToSignedString } from '../numberToSignedString'

describe('numberToSignedString', () => {
  test('should add plus to positive number', () => {
    const num = 123

    expect(
      numberToSignedString(num),
    ).toBe('+ 123')
  })

  test('should not add plus or minus to zero number', () => {
    const num = 0

    expect(
      numberToSignedString(num),
    ).toBe('0')
  })

  test('should add minus to negative number', () => {
    const num = -12

    expect(
      numberToSignedString(num),
    ).toBe('- 12')
  })
})
