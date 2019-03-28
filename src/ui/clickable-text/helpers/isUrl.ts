import { EMAIL_REGEXP } from './EMAIL_REGEXP'
import { URL_REGEXP } from './URL_REGEXP'

export const isUrl = (text: string): boolean => {
  if (text.match(EMAIL_REGEXP)) {
    return false
  }

  const match = text.match(URL_REGEXP)

  if (!match) {
    return false
  }

  return match[0] === text
}
