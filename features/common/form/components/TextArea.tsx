import * as React from 'react'
import { Field } from 'react-final-form'

import SimpleTextArea, { Props as AreaProps } from '@app/ui/atoms/TextArea'

const TextArea = ({ name, ...rest }: AreaProps) => (
  <Field name={name} type="textarea">
    {({ input }) => <SimpleTextArea name={name} {...input} {...rest} />}
  </Field>
)

export default TextArea
