import { Radio } from 'antd'
import { head } from 'lodash'
import * as React from 'react'

import { RadioChangeEvent } from 'antd/lib/radio'

const AntRadioGroup = Radio.Group

interface Button {
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

const defineCurrentDefaultValue = (buttons: Button[], defaultValue?: string): string => {
  if (!!defaultValue) {
    return defaultValue
  }

  const fisrt = head(buttons)

  if (!!fisrt) {
    return fisrt.value
  }

  return ''
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
