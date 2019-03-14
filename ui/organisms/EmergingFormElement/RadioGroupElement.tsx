import * as React from 'react'

import RadioGroup from '@app/ui/RadioGroup'
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

const EMPTY_VALUE = ''

const getValue = (value: string | undefined) =>
  value === EMPTY_VALUE
    ? undefined
    : value
    ? RadioButtonsValue.Yes
    : RadioButtonsValue.No

export interface Props {
  name?: string
  onChange?: (evt: RadioChangeEvent) => void
  defaultChecked?: boolean
  value?: string
}

const RadioGroupElement = ({
  name = '',
  onChange,
  defaultChecked,
  value,
  ...rest
}: Props) => (
  <RadioGroup
    name={name}
    buttons={radioButtons}
    onChange={onChange}
    value={getValue(value)}
    {...rest}
  />
)

export default RadioGroupElement
