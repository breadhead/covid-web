import { RadioChangeEvent } from 'antd/lib/radio'
import * as React from 'react'

import Bool from './Bool'
import './ButtonStyle.css?CSSModulesDisable'
import Button from './ButtonVariant'
import Controls from './Controls'
import './RadioStyle.css?CSSModulesDisable'

export enum RadioGroupType {
  Bool = 'Bool',
  Controls = 'Controls',
}

export enum RadioButtonStyles {
  Button = 'Button',
  Radio = 'Radio',
}

export interface Props {
  name: string
  type: RadioGroupType
  buttons: Button[]
  defaultValue?: string
  className?: string
  label?: string
  onChange?: (evt: RadioChangeEvent) => void
  radioStyle?: RadioButtonStyles
}

const RadioGroup = ({
  name,
  type,
  buttons,
  defaultValue,
  className,
  onChange,
  radioStyle = RadioButtonStyles.Button,
}: Props) => {
  const SpecificRadioGroup = type === RadioGroupType.Controls ? Controls : Bool

  return (
    <div className={`radioButtonStyle__${radioStyle}`}>
      <SpecificRadioGroup
        name={name}
        buttons={buttons}
        defaultValue={defaultValue}
        onChange={onChange}
        className={className}
      />
    </div>
  )
}

export default RadioGroup
