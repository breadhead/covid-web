import * as React from 'react'

import { MOBILE_WIDTH } from '@app/lib/config'
import Select from '@app/ui/atoms/Select'
import { OPTIONS_MONTHS } from './helpers'

interface Props {
  width?: number
  wrapperClassName?: string
  selectClassName?: string
}

const SelectMonths = ({ width = 320, selectClassName }: Props) => (
  <Select
    placeholder={width < MOBILE_WIDTH ? 'Месяц' : 'Выберите месяц'}
    options={OPTIONS_MONTHS}
    name="month"
    className={selectClassName}
  />
)

export default SelectMonths
