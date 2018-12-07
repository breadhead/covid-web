import { head } from 'lodash'
import { Button } from '.'

const defineCurrentDefaultValue = (
  buttons: Button[],
  defaultValue?: string,
): string => {
  if (!!defaultValue) {
    return defaultValue
  }

  const fisrt = head(buttons)

  if (!!fisrt) {
    return fisrt.value
  }

  return ''
}

export default defineCurrentDefaultValue
