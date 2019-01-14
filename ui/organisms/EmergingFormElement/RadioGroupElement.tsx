import * as React from 'react'

import RadioGroup from '@app/ui/molecules/RadioGroup'
import { RadioChangeEvent } from 'antd/lib/radio'

export enum RadioButtonsValue {
  Yes = 'Да',
  No = 'Нет',
}

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
  defaultValue?: string
}

const RadioGroupElement = ({ name = '', onChange, defaultValue }: Props) => (
  <RadioGroup
    name={name}
    buttons={radioButtons}
    onChange={onChange}
    defaultValue={defaultValue}
  />
)

export default RadioGroupElement
