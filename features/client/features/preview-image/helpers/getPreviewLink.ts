import { IMAGE_REGEXP } from '@app/src/helpers/regexs'

export const getPreviewLink = (link: string) => {
  console.log('link:', link)
  console.log('condition', IMAGE_REGEXP.test(link))

  if (IMAGE_REGEXP.test(link)) {
    return `/preview-image/${encodeURIComponent(link)}`
  }

  if (link.endsWith('.jpg')) {
    return `/preview-image/${encodeURIComponent(link)}`
  }

  return link
}
