import * as React from 'react'

import Select from '@app/ui/Select'

import { getYears } from './years'

export interface Props {
  name: string
  isMobile?: boolean
  className?: string
  placeholder?: string
}

const YEARS_AMOUNT = 70
const years = getYears(YEARS_AMOUNT)

const SelectYears = ({
  isMobile,
  className,
  name,
  placeholder,
  ...rest
}: Props) => {
  const selectPlaceholder = placeholder
    ? placeholder
    : isMobile
    ? 'Год'
    : 'Выберите год'

  return (
    <Select
      placeholder={selectPlaceholder}
      options={years}
      name={name}
      {...rest}
      className={className}
    />
  )
}

export default SelectYears
