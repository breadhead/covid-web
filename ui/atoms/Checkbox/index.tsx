import { Checkbox as AntCheckbox } from 'antd'
import * as React from 'react'

import './Checkbox.css?CSSModulesDisable'

export interface Props {
  name: string
  children?: React.ReactNode
  className?: string
  defaultChecked?: boolean
  disabled?: boolean
}

const Checkbox = ({
  name,
  className,
  children,
  defaultChecked,
  disabled,
  ...rest
}: Props) => (
  <AntCheckbox
    name={name}
    className={className}
    defaultChecked={defaultChecked}
    disabled={disabled}
    {...rest}
  >
    {children}
  </AntCheckbox>
)

export default Checkbox
