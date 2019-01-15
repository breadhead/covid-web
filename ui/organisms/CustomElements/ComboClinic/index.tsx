import * as React from 'react'

import Combobox from '@app/ui/molecules/Combobox'

import { OPTIONS_CLINICS } from './config'

export interface Props {
  name: string
  className?: string
}

const ComboClinic = ({ name, className, ...rest }: Props) => (
  <Combobox
    placeholder="Выберите клинику"
    options={OPTIONS_CLINICS}
    name={name}
    className={className}
    {...rest}
  />
)

export default ComboClinic
