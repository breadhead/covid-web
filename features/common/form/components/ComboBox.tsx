import * as React from 'react'
import { Field } from 'react-final-form'

import SimpleCombobox, {
  Props as EmergingProps,
} from '@app/ui/molecules/Combobox'

const Combobox = ({ name, ...rest }: EmergingProps) => (
  <Field name={name}>
    {({ input }) => <SimpleCombobox name={name} {...input} {...rest} />}
  </Field>
)

export default Combobox
