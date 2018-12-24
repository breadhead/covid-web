import * as React from 'react'

import Combobox from '@app/ui/molecules/Combobox'

import { OPTIONS_CITIES } from './config'

interface Props {
  name: string
  className?: string
}

const ComboCity = ({ className, name }: Props) => (
  <Combobox
    placeholder="Выберите город"
    options={OPTIONS_CITIES}
    hintForEmptyValue="Начните вводить название населенного пункта и
    выберите подходящее значение из списка:"
    hint="Продолжайте вводить название, если не видите свой город:"
    name={name}
    className={className}
  />
)

export default ComboCity