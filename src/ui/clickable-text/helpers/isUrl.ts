import { URL_REGEXP } from './URL_REGEXP'

export const isUrl = (text: string): boolean => {
  const match = text.match(URL_REGEXP)

  if (!match) {
    return false
  }

  return match[0] === text
}
