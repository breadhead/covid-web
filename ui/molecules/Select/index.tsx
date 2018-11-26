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
  disabled?: boolean
}

const Select = ({
  name,
  className,
  label,
  options,
  defaultValue,
  disabled,
  ...rest
}: Props) => {

  const defaultSelectValue = defaultValue || options[0].value

  return (
    <FinalField className={className} name={name}>
      {({ meta }) => (
        <FormItem
          validateStatus={meta.submitError && 'error'}
          help={meta.submitError}
        >
          {label && <label htmlFor={name}>{label}</label>}
          <AntSelect
            id={name}
            defaultValue={defaultSelectValue}
            disabled={disabled}
            {...rest}
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
