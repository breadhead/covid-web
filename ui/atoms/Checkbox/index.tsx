import { Checkbox as AntCheckbox } from 'antd'
import * as React from 'react'

import './Checkbox.css?CSSModulesDisable'

interface Props {
  name: string
  className: string
}

const Checkbox = ({ name, className, ...rest }: Props) => (
  <AntCheckbox name={name} className={className} {...rest} />
)

export default Checkbox
