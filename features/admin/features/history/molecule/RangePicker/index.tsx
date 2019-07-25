import { DatePicker } from 'antd'
import { RangePickerValue } from 'antd/lib/date-picker/interface'
import * as React from 'react'
import { rangePickerValueToDates } from './helper/rangePickerValueToDates'
import { useCustomInput } from '@app/src/hooks/useCustomInput'
import * as moment from 'moment'

interface Props {
  value?: [Date, Date]
  onChange: (value: [Date, Date] | undefined) => Promise<void> | void
  dateIsDisabled?: (currentDate: Date) => boolean
}

const RangePicker = ({ dateIsDisabled, value, onChange }: Props) => {
  const { currentValue, handleChange } = useCustomInput(value, onChange)

  const antOnClick = React.useCallback(
    (dates: RangePickerValue) => {
      const { start, end } = rangePickerValueToDates(dates)

      if (!start || !end) {
        return handleChange(undefined)
      }

      return handleChange([start, end])
    },
    [handleChange],
  )

  const antValue = React.useMemo(
    () => {
      if (!currentValue) {
        return undefined
      }

      const [start, end] = currentValue

      return [moment(start), moment(end)]
    },
    [currentValue],
  )

  const disabledDate = React.useCallback(
    (date: moment.Moment | undefined) => {
      if (!date || !dateIsDisabled) {
        return false
      }

      return dateIsDisabled(date.toDate())
    },
    [dateIsDisabled],
  )

  return (
    <DatePicker.RangePicker
      value={antValue as any}
      disabledDate={disabledDate}
      onChange={antOnClick}
      placeholder={['от', 'до']}
    />
  )
}

export default RangePicker
