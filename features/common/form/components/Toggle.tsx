import * as React from 'react'
import { Field } from 'react-final-form'

import { Props as ToggleProps, Toggle as SimpleToggle } from '@front/ui/toggle'

const Toggle = ({ name, ...rest }: ToggleProps) => (
  <Field name={name}>
    {({ input }) => (
      <SimpleToggle name={name} {...input} value={input.value} {...rest} />
    )}
  </Field>
)

export default Toggle
