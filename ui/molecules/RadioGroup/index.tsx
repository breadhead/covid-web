import { RadioChangeEvent } from 'antd/lib/radio'
import * as React from 'react'

import Bool from './Bool'
import Button from './ButtonVariant'
import Controls from './Controls'
import './RadioGroup.css?CSSModulesDisable'

export enum RadioGroupType {
  Bool = 'Bool',
  Controls = 'Controls',
}
export interface Props {
  name: string
  type: RadioGroupType
  buttons: Button[]
  defaultValue?: string
  className?: string
  label?: string
  onChange?: (evt: RadioChangeEvent) => void
}

const RadioGroup = (props: Props) => {
  const { name, type, buttons, defaultValue, className, onChange } = props

  const SpecificRadioGroup = type === RadioGroupType.Controls ? Controls : Bool

  return (
    <SpecificRadioGroup
      className={className}
      name={name}
      buttons={buttons}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  )
}

export default RadioGroup
