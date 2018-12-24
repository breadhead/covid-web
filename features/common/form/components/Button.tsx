import * as React from 'react'
import { Field } from 'react-final-form'

import SimpleButton, { ButtonType, Props } from '@app/ui/atoms/Button'

const Button = ({ type = ButtonType.Button, children, ...rest }: Props) => (
  <SimpleButton type={type} {...rest}>
    {children}
  </SimpleButton>
)

export default Button
