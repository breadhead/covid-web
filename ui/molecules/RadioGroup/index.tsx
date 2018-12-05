import * as React from 'react'

import './RadioGroup.css?CSSModulesDisable'

import { Form as AntForm } from 'antd'
import { Field as FinalField } from 'react-final-form'

import { RadioChangeEvent } from 'antd/lib/radio'
import Bool from './Bool'
import Controls from './Controls'

const FormItem = AntForm.Item

export enum RadioGroupType {
  Bool = 'Bool',
  Controls = 'Controls',
}
interface Props {
  name: string
  type: RadioGroupType
  buttons: Array<{
    id: string,
    value: string,
    text?: string,
  }>
  defaultValue?: string
  className?: string
  label?: string
  onChange?: (evt: RadioChangeEvent) => void
}

const RadioGroup = (props: Props) => {
  const {
    name, type, buttons, defaultValue, className, onChange,
  } = props

  const radioGroup = type === RadioGroupType.Controls
    ? <Controls
      name={name}
      buttons={buttons}
      defaultValue={defaultValue}
      onChange={onChange}
    />
    : <Bool
      name={name}
      buttons={buttons}
      defaultValue={defaultValue}
      onChange={onChange}
    />

  return <FinalField className={className} name={name}>
    {({ meta }) => (
      <FormItem
        validateStatus={meta.submitError && 'error'}
        help={meta.submitError}
      >
        {radioGroup}
      </FormItem>)}
  </FinalField>
}

export default RadioGroup
