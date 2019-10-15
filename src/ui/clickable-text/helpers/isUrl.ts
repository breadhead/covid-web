import { isDate } from './isDate'
import { isEmail } from './isEmail'
import { URL_REGEXP, URL_FILE_REGEX } from './URL_REGEXP'

export const isUrl = (text: string): boolean => {
  if (text.startsWith('/preview-image')) {
    return true
  }

  if (isEmail(text)) {
    return false
  }

  if (isDate(text)) {
    return false
  }

  const regularMatch = text.match(URL_REGEXP)

  if (regularMatch) {
    return regularMatch[0] === text
  }

  const zipMatch = text.match(URL_FILE_REGEX)

  if (zipMatch) {
    return true
  }

  return false
}
