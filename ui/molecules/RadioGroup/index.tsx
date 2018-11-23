import * as React from 'react'

import './RadioGroup.css?CSSModulesDisable'

import { Form as AntForm, Radio } from 'antd'
import { Field as FinalField } from 'react-final-form'

const FormItem = AntForm.Item
const AntRadioGroup = Radio.Group

interface Props {
  name: string
  type: 'bool' | 'controls'
  buttons: Array<{
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
  buttons,
  defaultValue,
  ...rest
}: Props) => {

  const defaultValueForControlsRadioGroup = defaultValue || buttons[0].value

  const getRadioGroup = (groupType: string) => {
    switch (groupType) {
    case 'controls':
      return <AntRadioGroup className="controls" name={name} defaultValue={defaultValueForControlsRadioGroup}>
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
      return <AntRadioGroup name={name} defaultValue={defaultValue}>
          {buttons.map((button) =>
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
      return null
      break
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
