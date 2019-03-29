import { EMAIL_REGEXP } from './EMAIL_REGEXP'

export const isEmail = (text: string) => {
  // we must set lastIndex to zero, because
  // https://stackoverflow.com/questions/15276873/is-javascript-test-saving-state-in-the-regex
  EMAIL_REGEXP.lastIndex = 0
  if (EMAIL_REGEXP.test(text)) {
    EMAIL_REGEXP.lastIndex = 0
    // we must reset RegExp internal state after usage
    return true
  }
}
