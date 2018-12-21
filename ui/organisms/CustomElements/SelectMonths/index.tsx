import * as React from 'react'

import Select from '@app/ui/atoms/Select'
import { OPTIONS_MONTHS } from './config'

interface Props {
  name: string
  isMobile?: boolean
  className?: string
}

const SelectMonths = ({ name, isMobile, className }: Props) => (
  <Select
    placeholder={isMobile ? 'Месяц' : 'Выберите месяц'}
    options={OPTIONS_MONTHS}
    name={name}
    className={className}
  />
)

export default SelectMonths
