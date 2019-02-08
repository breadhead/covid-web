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
})
