import * as React from 'react'

import { Radio } from 'antd'

import { RadioChangeEvent } from 'antd/lib/radio'

const AntRadioGroup = Radio.Group

interface Props {
  name: string
  buttons: Array<{
    id: string,
    value: string,
    text?: string,
  }>
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

  const defaultValueForControlsRadioGroup = defaultValue || buttons[0].value

  return <AntRadioGroup
    name={name}
    onChange={onChange}
    defaultValue={defaultValueForControlsRadioGroup}
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
