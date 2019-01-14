import * as React from 'react'

import { Radio } from 'antd'

import { RadioChangeEvent } from 'antd/lib/radio'
import Button from '../ButtonVariant'

const AntRadioGroup = Radio.Group

interface Props {
  name: string
  buttons: Button[]
  defaultValue?: string
  className?: string
  onChange?: (evt: RadioChangeEvent) => void
}

const Bool = ({ name, buttons, defaultValue, onChange, ...rest }: Props) => (
  <AntRadioGroup name={name} onChange={onChange} defaultValue={defaultValue}>
    {buttons.map(button => (
      <Radio key={button.id} value={button.value} {...rest}>
        {button.text || button.value}
      </Radio>
    ))}
  </AntRadioGroup>
)

export default Bool
