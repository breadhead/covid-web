import { Checkbox as AntCheckbox } from 'antd'
import { CheckboxProps } from 'antd/lib/checkbox'
import * as React from 'react'

import './Checkbox.css?CSSModulesDisable'

const Checkbox = ({ children, ...rest }: CheckboxProps) => (
  <AntCheckbox {...rest}>{children}</AntCheckbox>
)

export default Checkbox
