import * as React from 'react'

import { MOBILE_WIDTH } from '@app/lib/config'
import Select from '@app/ui/atoms/Select'
import { OPTIONS_MONTHS } from './helpers'

interface Props {
  name: string
  width?: number
  className?: string
}

const SelectMonths = ({ name, width = 320, className }: Props) => (
  <Select
    placeholder={width < MOBILE_WIDTH ? 'Месяц' : 'Выберите месяц'}
    options={OPTIONS_MONTHS}
    name={name}
    className={className}
  />
)

export default SelectMonths
