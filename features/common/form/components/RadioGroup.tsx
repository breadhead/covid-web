import * as React from 'react'
import { Field } from 'react-final-form'

import SimpleRadioGroup, {
  Props as RadioProps,
} from '@app/ui/molecules/RadioGroup'

const RadioGroup = ({ name, ...rest }: RadioProps) => (
  <Field type="radio" name={name}>
    {({ input }) => <SimpleRadioGroup name={name} {...input} {...rest} />}
  </Field>
)

export default RadioGroup
