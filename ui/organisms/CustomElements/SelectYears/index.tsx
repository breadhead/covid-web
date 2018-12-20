import * as React from 'react'

import { MOBILE_WIDTH } from '@app/lib/config'
import Select from '@app/ui/atoms/Select'

import { OPTIONS_YEARS } from './helpers'

interface Props {
  name: string
  width?: number
  className?: string
}

const SelectYears = ({ width = 320, className, name }: Props) => (
  <Select
    placeholder={width < MOBILE_WIDTH ? 'Год' : 'Выберите год'}
    options={OPTIONS_YEARS}
    name={name}
    className={className}
  />
)

export default SelectYears
