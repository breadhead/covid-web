import {
  shouldValidateDates,
  validateDates,
} from '@app/lib/helpers/validateDates'
import { get } from 'lodash'
import ValidationTooltip from './ValidationTooltip'

const validationCb = (path: string) => (_: any, values: any) => {
  const { when, end } = get(values, path) || {
    when: null,
    end: null,
  }

  if (shouldValidateDates(when, end)) {
    if (!validateDates(when, end)) {
      throw new Error(
        'Дата окончания не может быть раньше, чем дата начала лечения',
      )
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
