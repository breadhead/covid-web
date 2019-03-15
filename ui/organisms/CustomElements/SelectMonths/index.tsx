import * as React from 'react'

import Select from '@app/ui/Select'
import { OPTIONS_MONTHS } from './config'

export interface Props {
  name: string
  isMobile?: boolean
  className?: string
}

const SelectMonths = ({ name, isMobile, className, ...rest }: Props) => (
  <Select
    {...rest}
    placeholder={isMobile ? 'Месяц' : 'Выберите месяц'}
    options={OPTIONS_MONTHS}
    name={name}
    className={className}
  />
)

export default SelectMonths
