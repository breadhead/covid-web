import { isUndefined } from 'lodash'
import * as React from 'react'

// import RadioGroup from '@app/ui/molecules/RadioGroup'
import { RadioGroup } from '@app/features/common/form'
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
    value={
      value === ''
        ? undefined
        : value
        ? RadioButtonsValue.Yes
        : RadioButtonsValue.No
    }
    {...rest}
  />
)

export default RadioGroupElement
