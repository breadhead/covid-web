import { flow } from 'lodash'

export const numberToSignedString = (original: number) => flow([
  (num: number) => num > 0 ? `+${num}` : num.toString(),
  (signed: string) => [signed.slice(0, 1), signed.slice(1)].join(' '),
  (result: string) => result.trim(),
])(original)
