import { RadioChangeEvent } from 'antd/lib/radio'
import * as React from 'react'

import Bool from './Bool'
import './ButtonStyle.css?CSSModulesDisable'
import Button from './ButtonVariant'
import './RadioStyle.css?CSSModulesDisable'

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
}

const RadioGroup = ({
  name,
  buttons,
  defaultValue,
  className,
  onChange,
  radioStyle = RadioButtonStyles.Button,
}: Props) => {
  return (
    <div className={`radioButtonStyle__${radioStyle}`}>
      <Bool
        className={className}
        name={name}
        buttons={buttons}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  )
}

export default RadioGroup
