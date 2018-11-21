import * as React from 'react'

import './RadioGroup.css?CSSModulesDisable'

import { Form as AntForm, Radio } from 'antd'
import { Field as FinalField } from 'react-final-form'

const FormItem = AntForm.Item
const AntRadioGroup = Radio.Group

const boolRadioButtons = [
  { id: '1', value: 'Да' },
  { id: '2', value: 'Нет' },
]
interface Props {
  name: string
  type: 'bool' | 'controls'
  buttons?: Array<{
    id: string,
    value: string,
    text?: string,
  }>
  defaultValue?: string
  className?: string
  label?: string
}

const RadioGroup = ({
  name,
  type,
  className,
  label,
  buttons = boolRadioButtons,
  defaultValue,
  ...rest
}: Props) => {

  const defaultValueForControlsRadioGroup = defaultValue || buttons[0].value

  const getRadioGroup = (groupType: string) => {
    let radioGroup
    switch (groupType) {
    case 'controls':
      radioGroup = <AntRadioGroup className="controls" name={name} defaultValue={defaultValueForControlsRadioGroup}>
          {buttons.map((button) =>
            <Radio
              key={button.id}
              value={button.value}
              {...rest}
            >
              {button.text}<div className="semibold">{button.value}</div>
            </Radio>)}
        </AntRadioGroup>
      break
    case 'bool':
      radioGroup = <AntRadioGroup name={name} defaultValue={defaultValue}>
          {boolRadioButtons.map((button) =>
            <Radio
              key={button.id}
              value={button.value}
              {...rest}
            >
              {button.value}
            </Radio>)}
        </AntRadioGroup>
      break
    default:
      break
    }

    return radioGroup
  }

  return <FinalField className={className} name={name}>
    {({ meta }) => (
      <FormItem
        validateStatus={meta.submitError && 'error'}
        help={meta.submitError}
      >
        {label && <label htmlFor={name}>{label}</label>}
        {getRadioGroup(type)}
      </FormItem>)}
  </FinalField>
}

export default RadioGroup
