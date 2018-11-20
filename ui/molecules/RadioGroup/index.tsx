import * as React from 'react'

import './RadioGroup.css?CSSModulesDisable'

import { Form as AntForm, Radio } from 'antd'
import { Field as FinalField } from 'react-final-form'

const FormItem = AntForm.Item
const AntRadioGroup = Radio.Group

interface Props {
  name: string
  buttons: Array<{
    id: string,
    value: string,
  }>
  defaultValue?: string
  className?: string
  label?: string
}

const RadioGroup = ({
  name,
  className,
  label,
  defaultValue,
  buttons,
  ...rest
}: Props) =>
  <FinalField className={className} name={name}>
    {({ meta }) => (
      <FormItem
        validateStatus={meta.submitError && 'error'}
        help={meta.submitError}
      >
        {label && <label htmlFor={name}>{label}</label>}
        <AntRadioGroup className="radioGroup" name={name} defaultValue={defaultValue}>
          {buttons.map((button) =>
            <Radio
              key={button.id}
              value={button.value}
              {...rest}
            >
              {button.value}
            </Radio>,
          )}
        </AntRadioGroup>
      </FormItem>
    )
    }
  </FinalField>

export default RadioGroup
