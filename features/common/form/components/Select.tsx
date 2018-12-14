import * as React from 'react'
import { Field } from 'react-final-form'

import SimpleSelect, { Props as SelectProps } from '@app/ui/molecules/Select'

interface OwnProps {
  name: string
}

type Props = OwnProps & SelectProps

const Select = ({ name, ...rest }: Props) => (
  <Field name={name}>
    {({ input }) => <SimpleSelect {...input} {...rest} />}
  </Field>
)

export default Select
