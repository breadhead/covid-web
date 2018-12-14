import * as React from 'react'
import { Field } from 'react-final-form'

import SimpleButton, { ButtonType, Props } from '@app/ui/atoms/Button'

const Button = ({ type = ButtonType.Button, children, ...rest }: Props) => (
  <Field name="" type={type}>
    {({ input }) => (
      <SimpleButton type={type} {...rest} {...input}>
        {children}
      </SimpleButton>
    )}
  </Field>
)

export default Button
