import * as React from 'react'

import Combobox from '@app/ui/molecules/Combobox'

import { OPTIONS_CLINICS } from './config'

interface Props {
  name: string
  className?: string
}

const ComboClinic = ({ name, className }: Props) => (
  <Combobox
    placeholder="Выберите клинику"
    options={OPTIONS_CLINICS}
    name={name}
    className={className}
  />
)

export default ComboClinic