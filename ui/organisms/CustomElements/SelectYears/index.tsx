import * as React from 'react'

import { MOBILE_WIDTH } from '@app/lib/config'
import Select from '@app/ui/atoms/Select'

import { OPTIONS_YEARS } from './helpers'

interface Props {
  name: string
  width?: number
  className?: string
  placeholder?: string
}

const SelectYears = ({ width = 320, className, name, placeholder }: Props) => {
  const selectPlaceholder = placeholder
    ? placeholder
    : width < MOBILE_WIDTH
    ? 'Год'
    : 'Выберите год'

  return (
    <Select
      placeholder={selectPlaceholder}
      options={OPTIONS_YEARS}
      name={name}
      className={className}
    />
  )
}

export default SelectYears
