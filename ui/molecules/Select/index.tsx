import { Form as AntForm, Select as AntSelect } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

const FormItem = AntForm.Item
const Option = AntSelect.Option

interface Props {
  name: string
  defaultValue: string
  options: Array<{
    title: string,
    value: string,
  }>,
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
  options,
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
          defaultValue={defaultValue}
          id={name}
          placeholder={placeholder}
          // {...input}
          {...rest}
        >
          {options.map((option) => (
            <Option key={option.value} value={option.value}>{option.title}</Option>
          ))}
        </AntSelect>
      </FormItem>
    )}
  </FinalField>

export default Select
