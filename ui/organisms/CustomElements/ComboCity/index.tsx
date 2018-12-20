import * as React from 'react'

import Combobox from '@app/ui/molecules/Combobox'

import { OPTIONS_CITIES } from '@app/features/main/claim/organisms/secondStep/organisms/ClaimForm/organisms/History/helpers'

interface Props {
  name: string
  width?: number
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
