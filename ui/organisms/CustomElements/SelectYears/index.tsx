import * as React from 'react'

import Select from '@app/ui/atoms/Select'

import { OPTIONS_YEARS } from './config'

export interface Props {
  name: string
  isMobile?: boolean
  className?: string
  placeholder?: string
}

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
      options={OPTIONS_YEARS}
      name={name}
      {...rest}
      className={className}
    />
  )
}

export default SelectYears
