import { DatePicker } from 'antd'
import { RangePickerValue } from 'antd/lib/date-picker/interface'
import * as React from 'react'
import { rangePickerValueToDates } from './helper/rangePickerValueToDates'

interface Props {
  onChange: (from?: Date, to?: Date) => Promise<void> | void
}

const RangePicker = ({ onChange }: Props) => {
  const handleChange = (dates: RangePickerValue) => {
    const { start, end } = rangePickerValueToDates(dates)

    return onChange(start, end)
  }

  return (
    <DatePicker.RangePicker
      onChange={handleChange}
      placeholder={['от', 'до']}
    />
  )
}

export default RangePicker
