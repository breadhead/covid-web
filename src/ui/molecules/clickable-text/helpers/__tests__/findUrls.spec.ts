import { findUrls } from '../findUrls'

describe('findUrls', () => {
  test('should return empty if text no contains links', () => {
    const text = 'Hello world!'

    expect(findUrls(text)).toEqual([])
  })

  test('sould return one url if text with one link', () => {
    const text = 'Check google.com please'
    expect(findUrls(text)).toEqual(['google.com'])
  })

  test('sould return one url if text with many links', () => {
    const text = 'Check google.com and https://breadhead.ru please'
    expect(findUrls(text)).toEqual(['google.com', 'https://breadhead.ru'])
  })

  test('should return only url for Gdrive url with comment', () => {
    const text =
      'Hello, check https://drive.google.com/open?id=0B_fsfvYDcajXdjVScXRUVnBhMjg'

    expect(findUrls(text)).toEqual([
      'https://drive.google.com/open?id=0B_fsfvYDcajXdjVScXRUVnBhMjg',
    ])
  })
})
