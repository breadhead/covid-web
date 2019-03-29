import { isEmail } from '../isEmail'

describe('isEmail', () => {
  test('should return true for regular email', () => {
    const text = 'hello@gmail.com'

    expect(isEmail(text)).toBeTruthy()
  })

  test('should return true for email with dot', () => {
    const text = 'hello.hello@gmail.com'

    expect(isEmail(text)).toBeTruthy()
  })

  test('should return true for email with _', () => {
    const text = 'wlwl_hello.hello@gmail.com'

    expect(isEmail(text)).toBeTruthy()
  })

  test('should return true for email with rarely domen', () => {
    const text = 'hello@gmail.mememe'

    expect(isEmail(text)).toBeTruthy()
  })

  test('should return true for email with rarely mail agent', () => {
    const text = 'hello@dmmdm.com'

    expect(isEmail(text)).toBeTruthy()
  })

  test('should return true for email with short mail agent', () => {
    const text = 'hello@d.com'

    expect(isEmail(text)).toBeTruthy()
  })

  test('should return true for email with short domen', () => {
    const text = 'hello@d.com'

    expect(isEmail(text)).toBeTruthy()
  })

  test('should return true for email started on +', () => {
    const text = '+hello@gmail.com'

    expect(isEmail(text)).toBeTruthy()
  })
})
