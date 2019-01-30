import { RadioChangeEvent } from 'antd/lib/radio'
import * as React from 'react'

import cx from 'classnames'

import { Radio } from 'antd'

import './ButtonStyle.css?CSSModulesDisable'
import Button from './ButtonVariant'
import './RadioStyle.css?CSSModulesDisable'

const AntRadioGroup = Radio.Group

export enum RadioButtonStyles {
  Button = 'Button',
  Radio = 'Radio',
}
export interface Props {
  name: string
  buttons: Button[]
  defaultValue?: string
  className?: string
  label?: string
  onChange?: (evt: RadioChangeEvent) => void
  radioStyle?: RadioButtonStyles
  value?: string
}

const RadioGroup = ({
  name,
  buttons,
  defaultValue,
  className,
  onChange,
  value,
  radioStyle = RadioButtonStyles.Button,
  ...rest
}: Props) => {
  return (
    <div className={cx(`radioButtonStyle__${radioStyle}`, className)}>
      <AntRadioGroup
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
        value={value}
      >
        {buttons.map(button => (
          <Radio key={button.id} name={name} value={button.value} {...rest}>
            {button.component || button.text || button.value}
          </Radio>
        ))}
      </AntRadioGroup>
    </div>
  )
}

export default RadioGroup
