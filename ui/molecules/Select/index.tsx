import { Form as AntForm, Select as AntSelect } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

const FormItem = AntForm.Item

interface Props {
  name: string
  defaultValue: string
  className?: string
  label?: string
  placeholder?: string
  required?: true
}

const Select = ({
  name,
  defaultValue,
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
          defaultValue={defaultValue}
          {...rest}
          {...input}
        />

      </FormItem>
    )}
  </FinalField>

export default Select
