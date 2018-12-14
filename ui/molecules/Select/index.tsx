import { Form as AntForm, Select as AntSelect } from 'antd'
import { LabeledValue } from 'antd/lib/select'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

import './Select.css?CSSModulesDisable'

const FormItem = AntForm.Item
const Option = AntSelect.Option

interface Props {
  name: string
  options: LabeledValue[]
  className?: string
  label?: string
  disabled?: boolean
}

const Select = ({
  name,
  className,
  label,
  options,
  disabled,
  ...rest
}: Props) => (
  <FinalField className={className} name={name}>
    {({ meta, input }) => (
      <FormItem
        validateStatus={meta.submitError && 'error'}
        help={meta.submitError}
      >
        {label && <label htmlFor={name}>{label}</label>}
        <AntSelect id={name} disabled={disabled} {...rest} {...input}>
          {options.map(option => (
            <Option key={option.key} value={option.key}>
              {option.label}
            </Option>
          ))}
        </AntSelect>
      </FormItem>
    )}
  </FinalField>
)

export default Select
