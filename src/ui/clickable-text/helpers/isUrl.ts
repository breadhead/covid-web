import { isDate } from './isDate'
import { isEmail } from './isEmail'
import { URL_REGEXP } from './URL_REGEXP'

export const isUrl = (text: string): boolean => {
  if (isEmail(text)) {
    return false
  }

  if (isDate(text)) {
    return false
  }

  const match = text.match(URL_REGEXP)

  if (!match) {
    return false
  }

  return match[0] === text
}
