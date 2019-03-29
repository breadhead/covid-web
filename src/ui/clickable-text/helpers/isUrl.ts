import { EMAIL_REGEXP } from './EMAIL_REGEXP'
import { URL_REGEXP } from './URL_REGEXP'

export const isUrl = (text: string): boolean => {
  // we must set lastIndex to zero, because
  // https://stackoverflow.com/questions/15276873/is-javascript-test-saving-state-in-the-regex
  EMAIL_REGEXP.lastIndex = 0
  if (EMAIL_REGEXP.test(text)) {
    EMAIL_REGEXP.lastIndex = 0
    // we must reset RegExp internal state after usage
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
