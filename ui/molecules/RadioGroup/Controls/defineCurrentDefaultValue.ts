import { head } from 'lodash'
import Button from '../ButtonVariant'

const defineCurrentDefaultValue = (
  buttons: Button[],
  defaultValue?: string | null,
) => {
  if (!!defaultValue) {
    return defaultValue
  }

  if (defaultValue === null) {
    return defaultValue
  }

  const fisrt = head(buttons)

  if (!!fisrt) {
    return fisrt.value
  }

  return ''
}

export default defineCurrentDefaultValue
