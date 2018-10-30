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
  <React.Fragment>
    {label && <label htmlFor={name}>{label}</label>}
    {/* <AntSelect
      defaultValue={defaultValue}
      id={name}
      placeholder={placeholder}
      {...rest}
    > */}
      <FinalField className={className} component={AntSelect} name={name}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>{option.title}</Option>
        ))}
      </FinalField>
    {/* </AntSelect> */}
  </React.Fragment>

export default Select
