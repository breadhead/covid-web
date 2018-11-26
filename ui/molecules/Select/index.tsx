import { Form as AntForm, Select as AntSelect } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

import './Select.css?CSSModulesDisable'

const FormItem = AntForm.Item
const Option = AntSelect.Option

interface Props {
  name: string
  options: Array<{
    value: string,
  }>
  defaultValue?: string
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
  options,
  placeholder,
  ...rest
}: Props) => {

  const defaultSelectValue = defaultValue || options[1].value

  return (
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
            defaultValue={defaultSelectValue}
            {...rest}
            {...input}
          >
            {options.map((option) => (
              <Option key={option.value} value={option.value}>{option.value}</Option>
            ))}
          </AntSelect>
        </FormItem>
      )}
    </FinalField>
  )
}

export default Select
