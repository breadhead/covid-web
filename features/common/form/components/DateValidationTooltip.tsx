import {
  ErrorCode,
  shouldValidateDates,
  validateDates,
} from '@app/lib/helpers/validateDates'
import { get } from 'lodash'
import ValidationTooltip from './ValidationTooltip'

const errorMessagesMap = {
  [ErrorCode.MixedDateOrder]:
    'Дата окончания не может быть раньше, чем дата начала лечения',
  [ErrorCode.FutureDate]: 'Нельзя выбирать даты в будущем',
}

const pickErrorMessage = (errorMessages: any, errorCode?: ErrorCode) =>
  errorCode ? errorMessages[errorCode] : undefined

const validationCb = (path: string) => (_: any, values: any) => {
  const { when, end } = get(values, path) || {
    when: null,
    end: null,
  }

  if (shouldValidateDates(when, end)) {
    const errorCode = validateDates(when, end)
    const errorMessage = pickErrorMessage(errorMessagesMap, errorCode)
    if (errorMessage) {
      throw new Error(errorMessage)
    }
  }
}

interface Props {
  path: string
}

const DateValidationTooltip = ({ path }: Props) => (
  <ValidationTooltip
    name={`${path}.dateError`}
    validateOnBlur={false}
    validateCb={validationCb(path)}
  />
)

export default DateValidationTooltip
