import { Checkbox as AntCheckbox } from 'antd'
import * as React from 'react'

import './Checkbox.css?CSSModulesDisable'

interface Props {
  name: string
  children?: React.ReactNode
  className?: string
  labelClassName?: string
}

const Checkbox = ({
  name,
  className,
  labelClassName,
  children,
  ...rest
}: Props) => (
  <AntCheckbox name={name} className={className} {...rest}>
    {children}
  </AntCheckbox>
)

export default Checkbox
