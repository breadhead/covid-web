import { Radio } from 'antd'
import * as React from 'react'

import './RadioButton.css?CSSModulesDisable'
interface Props {
  name: string
  value: string
  className?: string
  children?: React.ReactNode
}

const RadioButton = ({ name, className, value, children, ...rest }: Props) => (
  <Radio className="radioButton" name={name} value={value} {...rest}>
    {children}
  </Radio>
)

export default RadioButton
