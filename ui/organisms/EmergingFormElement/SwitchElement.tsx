import * as React from 'react'

import Switch from '@app/ui/Switch'

export interface Props {
  name?: string
  onChange?: () => void
  defaultChecked?: boolean
}

const SwitchElement = ({ name = '', onChange, defaultChecked }: Props) => (
  <Switch name={name} onChange={onChange} defaultChecked={defaultChecked} />
)

export default SwitchElement
