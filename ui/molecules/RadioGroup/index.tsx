import * as React from 'react'

import './RadioGroup.css?CSSModulesDisable'

import { Form as AntForm, Radio } from 'antd'
import { Field as FinalField } from 'react-final-form'

import { RadioChangeEvent } from 'antd/lib/radio'

const FormItem = AntForm.Item
const AntRadioGroup = Radio.Group

export enum Type {
  bool = 'bool',
  controls = 'controls',
}
interface Props {
  name: string
  type: Type
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

const RadioGroup = ({
  name,
  type,
  className,
  label,
  buttons,
  defaultValue,
  onChange,
  ...rest
}: Props) => {

  const defaultValueForControlsRadioGroup = defaultValue || buttons[0].value

  const getRadioGroup = (groupType: string) => {
    switch (groupType) {
    case Type.controls:
      return <AntRadioGroup
          className="controls"
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
              {button.text}<div className="semibold">{button.value}</div>
            </Radio>)}
        </AntRadioGroup>
    case Type.bool:
      return <AntRadioGroup
          name={name}
          onChange={onChange}
          defaultValue={defaultValue}>
          {buttons.map((button) =>
            <Radio
              key={button.id}
              value={button.value}
              {...rest}
            >
              {button.value}
            </Radio>)}
        </AntRadioGroup>
    default:
      return null
    }
  }

  return <FinalField className={className} name={name}>
    {({ meta }) => (
      <FormItem
        validateStatus={meta.submitError && 'error'}
        help={meta.submitError}
      >
        {getRadioGroup(type)}
      </FormItem>)}
  </FinalField>
}

export default RadioGroup
