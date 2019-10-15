import { IMAGE_REGEXP } from '@app/src/helpers/regexs'

export const getPreviewLink = (link: string) => {
  if (IMAGE_REGEXP.test(link)) {
    return `/preview-image/${encodeURIComponent(link)}`
  }

  if (
    link.endsWith('.jpg') ||
    link.endsWith('.jpeg') ||
    link.endsWith('.JPG') ||
    link.endsWith('.JPEG') ||
    link.endsWith('.png') ||
    link.endsWith('.PNG')
  ) {
    return `/preview-image/${encodeURIComponent(link)}`
  }

  return link
}
