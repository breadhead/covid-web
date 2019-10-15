import { getPreviewLink } from '../getPreviewLink'

describe('getPreviewLink', () => {
  test('should include preview-image with .jpg', () => {
    const link =
      'https://sun9-44.userapi.com/c854216/v854216679/bc669/pns7i1dGFto.jpg'

    const res = getPreviewLink(link).includes('preview-image')

    expect(res).toEqual(true)
  })
  test('should include preview-image with .JPG', () => {
    const link =
      'https://sun9-44.userapi.com/c854216/v854216679/bc669/pns7i1dGFto.JPG'
    const res = getPreviewLink(link).includes('preview-image')

    expect(res).toEqual(true)
  })
  test('should include preview-image with .jpeg', () => {
    const link =
      'https://sun9-44.userapi.com/c854216/v854216679/bc669/pns7i1dGFto.jpeg'

    const res = getPreviewLink(link).includes('preview-image')

    expect(res).toEqual(true)
  })

  test('should include preview-image with .JPEG', () => {
    const link =
      'https://sun9-44.userapi.com/c854216/v854216679/bc669/pns7i1dGFto.JPEG'
    const res = getPreviewLink(link).includes('preview-image')

    expect(res).toEqual(true)
  })

  test('url with _', () => {
    const link =
      '1a33ecc23b4e76f172f4db366228b1ed_viber_image_2019-10-03_,_17.56.35.jpg'
    const res = getPreviewLink(link).includes('preview-image')

    expect(res).toEqual(true)
  })

  test('viber url', () => {
    const link =
      'https://store.ask.nenaprasno.ru/oncobucket/0655f1aecaba945d99db98c998436d29_viber_image_2019-10-03_,_17.56.36.jpg'
    const res = getPreviewLink(link).includes('preview-image')

    expect(res).toEqual(true)
  })

  test('viber url', () => {
    const link =
      'https://store.ask.nenaprasno.ru/oncobucket/1a33ecc23b4e76f172f4db366228b1ed_viber_image_2019-10-03_,_17.56.35.jpg'
    const res = getPreviewLink(link).includes('preview-image')

    expect(res).toEqual(true)
  })
})
