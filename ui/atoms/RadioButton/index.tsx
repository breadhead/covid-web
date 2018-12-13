import * as React from 'react'
import './RadioButton.css?CSSModulesDisable'

import { Form as AntForm, Radio } from 'antd'
import { Field as FinalField } from 'react-final-form'

const FormItem = AntForm.Item

interface Props {
  name: string
  value: string
  className?: string
  children?: React.ReactNode
}

const RadioButton = ({ name, className, value, children, ...rest }: Props) => (
  <FinalField className={className} name={name}>
    {({ meta }) => (
      <FormItem
        validateStatus={meta.submitError && 'error'}
        help={meta.submitError}
      >
        <Radio className="radioButton" name={name} value={value} {...rest}>
          {children}
        </Radio>
      </FormItem>
    )}
  </FinalField>
)

export default RadioButton
