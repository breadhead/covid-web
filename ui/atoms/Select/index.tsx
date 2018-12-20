import { Select as AntSelect } from 'antd'
import { LabeledValue, SelectProps } from 'antd/lib/select'
import * as React from 'react'

import './Select.css?CSSModulesDisable'

const Option = AntSelect.Option

interface OwnProps {
  name: string
  options: LabeledValue[]
  label?: string
}

export type Props = OwnProps & SelectProps

const Select = ({ name, options, label, ...rest }: Props) => (
  <>
    {label && <label htmlFor={name}>{label}</label>}
    <AntSelect id={name} {...rest}>
      {options.map(option => (
        <Option key={option.key} value={option.key}>
          {option.label}
        </Option>
      ))}
    </AntSelect>
  </>
)

export default Select
