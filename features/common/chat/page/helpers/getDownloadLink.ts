import { getPreviewLink } from '@app/features/client/features/preview-image'
import { URL_FILE_REGEX } from '@app/src/ui/clickable-text/helpers/URL_REGEXP'
import { IMAGE_REGEXP } from '@app/src/helpers/regexs'

export const getDownloadLink = (host: string, url: string) => {
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'

  if (IMAGE_REGEXP.test(url)) {
    return `${protocol}://${host}${getPreviewLink(url)}`
  }

  if (URL_FILE_REGEX.test(url)) {
    return url
  }

  return `${protocol}://${host}${getPreviewLink(url)}`
}
