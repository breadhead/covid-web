import * as React from 'react'
import { Field } from 'react-final-form'

import SimpleEmergingFormElement, {
  Props as EmergingProps,
} from '@app/ui/organisms/EmergingFormElement'

const EmergingFormElement = ({ name, ...rest }: EmergingProps) => (
  <Field name={name}>
    {({ input }) => (
      <SimpleEmergingFormElement name={name} {...input} {...rest} />
    )}
  </Field>
)

export default EmergingFormElement
