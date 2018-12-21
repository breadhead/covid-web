import * as React from 'react'

import RadioGroup, { RadioGroupType } from '@app/ui/molecules/RadioGroup'
import { RadioChangeEvent } from 'antd/lib/radio'

export const radioButtons = [
  {
    id: '1',
    value: 'Да',
  },
  {
    id: '2',
    value: 'Нет',
  },
]

export interface Props {
  name?: string
  onChange?: (evt: RadioChangeEvent) => void
  defaultChecked?: boolean
  value?: boolean
}

const SwitchElement = ({ name = '', onChange, value }: Props) => (
  <RadioGroup
    name={name}
    type={RadioGroupType.Bool}
    buttons={radioButtons}
    onChange={onChange}
  />
)

export default SwitchElement
