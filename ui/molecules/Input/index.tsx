import { Form as AntForm, Input as AntInput } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'
import './Input.css?CSSModulesDisable'

const FormItem = AntForm.Item

interface Props {
  name: string,
  type: string,
  className?: string
  label?: string,
  placeholder?: string
  required?: true,
}

const Input = ({
  name,
  type,
  className,
  label,
  placeholder,
  ...rest
}: Props) =>
  <FinalField name={name} type={type}>
    {({ input, meta }) => (
      <FormItem
        className={className}
        validateStatus={meta.submitError && 'error'}
        help={meta.submitError}
      >
        {label && <label htmlFor={name}>{label}</label>}
        <AntInput
          id={name}
          type={type}
          placeholder={placeholder}
          {...input}
          {...rest}
        />

      </FormItem>
    )}
  </FinalField>

export default Input
