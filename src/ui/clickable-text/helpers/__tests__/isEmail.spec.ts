import { isEmail } from '../isEmail'

describe('isEmail', () => {
  test('should return true for regular email', () => {
    const email = 'hello@gmail.com'

    expect(isEmail(email)).toBeTruthy()
  })

  test('should return true for email with dot', () => {
    const email = 'hello.hello@gmail.com'

    expect(isEmail(email)).toBeTruthy()
  })

  test('should return true for email with _', () => {
    const email = 'wlwl_hello.hello@gmail.com'

    expect(isEmail(email)).toBeTruthy()
  })

  test('should return true for email with rarely domen', () => {
    const email = 'hello@gmail.mememe'

    expect(isEmail(email)).toBeTruthy()
  })

  test('should return true for email with rarely mail agent', () => {
    const email = 'hello@dmmdm.com'

    expect(isEmail(email)).toBeTruthy()
  })

  test('should return true for email with short mail agent', () => {
    const email = 'hello@d.com'

    expect(isEmail(email)).toBeTruthy()
  })

  test('should return true for email with short domen', () => {
    const email = 'hello@d.com'

    expect(isEmail(email)).toBeTruthy()
  })

  test('should return true for email started on +', () => {
    const email = '+hello@gmail.com'

    expect(isEmail(email)).toBeTruthy()
  })
})
