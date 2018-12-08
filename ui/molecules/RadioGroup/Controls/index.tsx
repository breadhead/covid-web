import { Radio } from 'antd'
import { RadioChangeEvent } from 'antd/lib/radio'
import * as React from 'react'

import Button from '../ButtonVariant'
import defineCurrentDefaultValue from './defineCurrentDefaultValue'

const AntRadioGroup = Radio.Group

interface Props {
  name: string
  buttons: Button[]
  defaultValue?: string
  className?: string
  onChange?: (evt: RadioChangeEvent) => void
}

const Controls = ({
  name,
  className,
  buttons,
  defaultValue,
  onChange,
  ...rest
}: Props) => {
  const currentDefaultValue = defineCurrentDefaultValue(buttons, defaultValue)

  return (
    <AntRadioGroup
      name={name}
      onChange={onChange}
      defaultValue={currentDefaultValue}
    >
      {buttons.map(button => (
        <Radio key={button.id} value={button.value} {...rest}>
          {button.text}
          {!!button.value && <div className="semibold">{button.value}</div>}
        </Radio>
      ))}
    </AntRadioGroup>
  )
}

export default Controls
