import { Select as AntSelect } from 'antd'
import { LabeledValue, SelectProps } from 'antd/lib/select'
import * as React from 'react'

import './Select.css?CSSModulesDisable'

const Option = AntSelect.Option

export type Props = {
  options: LabeledValue[]
  label?: string
} & SelectProps

const Select = ({ label, options, ...rest }: Props) => (
  <>
    {label && <label htmlFor={name}>{label}</label>}
    <AntSelect {...rest}>
      {options.map(option => (
        <Option key={option.key} value={option.key}>
          {option.label}
        </Option>
      ))}
    </AntSelect>
  </>
)

export default Select
