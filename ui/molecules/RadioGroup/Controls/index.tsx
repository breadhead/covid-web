import { Radio } from 'antd'
import * as React from 'react'

import { RadioChangeEvent } from 'antd/lib/radio'
import defineCurrentDefaultValue from './defineCurrentDefaultValue'

const AntRadioGroup = Radio.Group

export interface Button {
  id: string,
  value: string,
  text?: string,
}

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

  return <AntRadioGroup
    name={name}
    onChange={onChange}
    defaultValue={currentDefaultValue}
  >
    {buttons.map((button) =>
      <Radio
        key={button.id}
        value={button.value}
        {...rest}
      >
        {button.text}
        {!!button.value && <div className="semibold">{button.value}</div>}
      </Radio>)}
  </AntRadioGroup>
}

export default Controls
