import * as React from 'react'

import Select from '@app/ui/atoms/Select'
import { OPTIONS_MONTHS } from './config'

export interface Props {
  name: string
  isMobile?: boolean
  className?: string
}

const SelectMonths = ({ name, isMobile, className, ...rest }: Props) => (
  <Select
    placeholder={isMobile ? 'Месяц' : 'Выберите месяц'}
    options={OPTIONS_MONTHS}
    name={name}
    {...rest}
    className={className}
  />
)

export default SelectMonths
