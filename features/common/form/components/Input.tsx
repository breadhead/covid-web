import * as React from 'react'
import { Field } from 'react-final-form'

import SimpleInput, { Props as InputProps } from '@app/ui/atoms/Input'

const Input = ({ name, type, ...rest }: InputProps) => (
  <Field name={name} type={type}>
    {({ input }) => (
      <SimpleInput name={name} type={type} {...input} {...rest} />
    )}
  </Field>
)

export default Input
