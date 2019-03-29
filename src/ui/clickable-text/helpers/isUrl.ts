import { isEmail } from './isEmail'
import { URL_REGEXP } from './URL_REGEXP'

export const isUrl = (text: string): boolean => {
  if (isEmail(text)) {
    return false
  }

  if (/\d{2}\.\d{2}\.\d{4}/.test(text)) {
    return false
  }

  if (!isNaN(new Date(text).valueOf())) {
    return false
  }

  const match = text.match(URL_REGEXP)

  if (!match) {
    return false
  }

  return match[0] === text
}
