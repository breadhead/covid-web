import { IMAGE_REGEXP } from '@app/src/helpers/regexs'

export const getPreviewLink = (link: string) => {
  if (IMAGE_REGEXP.test(link)) {
    return `/preview-image/${encodeURIComponent(link)}`
  }

  return link
}
