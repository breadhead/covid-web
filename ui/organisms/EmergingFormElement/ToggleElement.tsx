import * as React from 'react'

import { Toggle } from '@front/ui/toggle'

export interface Props {
  name?: string
  onChange?: () => void
  defaultChecked?: boolean
}

const ToggleElement = ({ name = '', onChange, defaultChecked }: Props) => (
  <Toggle name={name} onChange={onChange} defaultChecked={defaultChecked} />
)

export default ToggleElement
