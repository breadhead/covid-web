import { isUrl } from '../isUrl'

describe('isUrl', () => {
  test('should return false for non-link text', () => {
    const text = 'Hello world!'

    expect(isUrl(text)).toBeFalsy()
  })

  test('should return true for simple text', () => {
    const text = 'google.com'

    expect(isUrl(text)).toBeTruthy()
  })

  test('should return true for complex text', () => {
    const text = 'https://breadhead.ru/fhksdj?kjfhdsfds=fsdmnfbjsd&bfs'

    expect(isUrl(text)).toBeTruthy()
  })

  test('should return false for GDrive link with comment', () => {
    const text =
      'Hello, check https://drive.google.com/open?id=0B_fsfvYDcajXdjVScXRUVnBhMjg'

    expect(isUrl(text)).toBeFalsy()
  })

  test('should return false for GDrive link with comment', () => {
    const text =
      'https://drive.google.com/open?id=0B_fsfvYDcajXdjVScXRUVnBhMjg Hello, check '

    expect(isUrl(text)).toBeFalsy()
  })

  test('should return false for email with comment', () => {
    const text = 'd.sidelnikova@nenaprasno.ru Hello, check '

    expect(isUrl(text)).toBeFalsy()
  })

  test('should return false for email', () => {
    const text = 'd.sidelnikova@nenaprasno.ru'

    expect(isUrl(text)).toBeFalsy()
  })

  test('should return false for email with long domain', () => {
    const text = 'd.sidelnikova@nenaprasno.tennis'

    expect(isUrl(text)).toBeFalsy()
  })

  test('should return false for email with underscore', () => {
    const text = 'd_sidelnikova@nenaprasno.tennis'

    expect(isUrl(text)).toBeFalsy()
  })

  test('should return false for email with +', () => {
    const text = 'd_sidelnikova+12@nenaprasno.tennis'

    expect(isUrl(text)).toBeFalsy()
  })
})
