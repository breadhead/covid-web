import * as React from 'react'
import { Field } from 'react-final-form'

import { Props as InputProps } from '@app/ui/atoms/Input'

const withFinalForm = (WrappedComponent: React.ComponentType<InputProps>) => ({
  name,
  type,
  ...rest
}: InputProps) => {
  return (
    <Field name={name} type={type}>
      {({ input }) => (
        <WrappedComponent name={name} type={type} {...input} {...rest} />
      )}
    </Field>
  )
}

export default withFinalForm
