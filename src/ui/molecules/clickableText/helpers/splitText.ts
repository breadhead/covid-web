import escapeStringRegexp from 'escape-string-regexp'

import { flatten } from '@front/helpers/flatten'

const createDelimiterRegExp = (delimiter: string): RegExp =>
  new RegExp(`(${escapeStringRegexp(delimiter)})`, 'g')

export const splitText = (text: string, by: string[]) => {
  let strings = [text]

  for (const delimiter of by) {
    const regExp = createDelimiterRegExp(delimiter)
    strings = flatten(strings.map(s => s.split(regExp)))
  }

  return strings.filter(Boolean)
}
