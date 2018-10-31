import { Form as AntForm, Select as AntSelect } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

const FormItem = AntForm.Item
const Option = AntSelect.Option
interface Props {
  name: string,
  className?: string
  label?: string,
  children: React.ReactNode,
  placeholder?: string
  required?: true,
  options: Array<{ name: string, value: string }>
}

const Select = ({
  name,
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
          id={name}
          placeholder={placeholder}
          {...rest}
          {...input}
        >
          {options.map((option) =>
            <Option key={option.value} value={option.value}>
              {option.name}
            </Option>)}
        </AntSelect>

      </FormItem>
    )}
  </FinalField>

export default Select
