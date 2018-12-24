import { Select as AntSelect } from 'antd'
import { LabeledValue, SelectProps } from 'antd/lib/select'
import * as React from 'react'

import './Select.css?CSSModulesDisable'

const Option = AntSelect.Option

interface OwnProps {
  name: string
  options: LabeledValue[]
  label?: string
  error?: string
}

export type Props = OwnProps & SelectProps

const Select = ({ name, options, label, error, ...rest }: Props) => (
  <div>
    {label && <label htmlFor={name}>{label}</label>}
    <AntSelect id={name} {...rest} className={error && 'error'}>
      {options.map(option => (
        <Option key={option.key} value={option.key}>
          {option.label}
        </Option>
      ))}
    </AntSelect>
  </div>
)

export default Select

export { mapEnum, mapString } from './mappers'
