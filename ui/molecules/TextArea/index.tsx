import * as React from 'react'
import './TextArea.css?CSSModulesDisable'

import { Form as AntForm, Input as AntInput } from 'antd'
import { Field as FinalField } from 'react-final-form'

const FormItem = AntForm.Item

interface Props {
  name: string
  className?: string
  label?: string | React.ReactNode
  placeholder?: string
  required?: true
  rows?: number
}

const TextArea = ({ name, className, label, placeholder, ...rest }: Props) => (
  <FinalField className={className} name={name}>
    {({ input, meta }) => (
      <FormItem
        validateStatus={meta.submitError && 'error'}
        help={meta.submitError}
      >
        {label && <label htmlFor={name}>{label}</label>}
        <AntInput.TextArea
          className="textarea"
          id={name}
          placeholder={placeholder}
          autosize
          {...input}
          {...rest}
        />
      </FormItem>
    )}
  </FinalField>
)

export default TextArea