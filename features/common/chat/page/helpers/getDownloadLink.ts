import { getPreviewLink } from '@app/features/client/features/preview-image'
import { URL_FILE_REGEX } from '@app/src/ui/clickable-text/helpers/URL_REGEXP'

export const getDownloadLink = (host: string, url: string) => {
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'

  if (URL_FILE_REGEX.test(url)) {
    return url
  }

  return `${protocol}://${host}${getPreviewLink(url)}`
}
