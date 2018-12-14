import * as React from 'react'
import { Field } from 'react-final-form'

import SimpleSelect, { Props as SelectProps } from '@app/ui/molecules/Select'

type Props = {
  name: string
} & SelectProps

const Select = ({ name, ...rest }: Props) => (
  <Field name={name}>
    {({ input }) => <SimpleSelect {...input} {...rest} />}
  </Field>
)

export default Select
