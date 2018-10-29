import { Form as AntForm, Select as AntSelect } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

const FormItem = AntForm.Item

interface Props {
  name: string,
  type: string,
  className?: string
  label?: string,
  placeholder?: string
  required?: true
}

const Select = ({
  name,
  type,
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
        <AntSelect
          id={name}
          placeholder={placeholder}
          {...rest}
          {...input}
        />

      </FormItem>
    )}
  </FinalField>

export default Select
