import * as React from 'react'
import './TextArea.css'
import './TextArea.css?CSSModulesDisbale'

import { Form as AntForm, Input as AntInput } from 'antd'
import { Field as FinalField } from 'react-final-form'

const FormItem = AntForm.Item

interface Props {
  name: string,
  className?: string
  label?: string,
  placeholder?: string
  required?: true
  rows?: number
}

const TextArea = ({
  name,
  className,
  label,
  placeholder,
  ...rest
}: Props) =>
  <FinalField className={className} name={name}>
    {({ input, meta }) => (
      <FormItem
        validateStatus={meta.submitError && 'error'}
        help={meta.submitError}
      >
        {label && <label htmlFor={name}>{label}</label>}
        <AntInput.TextArea

          id={name}
          placeholder={placeholder}
          {...input}
          {...rest}
        />

      </FormItem>
    )}
  </FinalField>

export default TextArea
