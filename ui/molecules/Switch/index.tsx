import { Switch as AntSwitch } from 'antd'
import { SwitchProps } from 'antd/lib/switch'
import * as React from 'react'

import './Switch.css?CSSModulesDisable'

export type Props = {
  label?: string
  name: string
} & SwitchProps

const Switch = ({ label, name, ...rest }: Props) => (
  <>
    {label && <label htmlFor={name}>{label}</label>}
    <AntSwitch checkedChildren="Да" unCheckedChildren="Нет" {...rest} />
  </>
)

export default Switch
