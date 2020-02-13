import * as React from 'react'

import HintInput from '@app/ui/HintInput'

import { OPTIONS_CLINICS } from './config'

export interface Props {
  name: string
  className?: string
}

// TODO: rename
const ComboClinic = ({ name, className, ...rest }: Props) => (
  <HintInput
    name={name}
    className={className}
    options={OPTIONS_CLINICS}
    {...rest}
  />
)

export default ComboClinic
