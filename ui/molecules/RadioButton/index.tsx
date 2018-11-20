import * as React from 'react'
import './RadioButton.css?CSSModulesDisable'

import { Form as AntForm, Radio } from 'antd'
import { Field as FinalField } from 'react-final-form'

const FormItem = AntForm.Item

interface Props {
  name: string
  value: string
  className?: string
  label?: string
  children?: React.ReactNode
}

const RadioButton = ({
  name,
  className,
  label,
  value,
  children,
  ...rest
}: Props) =>
  <FinalField className={className} name={name}>
    {({ meta }) => (
      <FormItem
        validateStatus={meta.submitError && 'error'}
        help={meta.submitError}
      >
        {label && <label htmlFor={name}>{label}</label>}
        <Radio name={name} value={value} {...rest}>
          {children}
        </Radio>
      </FormItem>
    )
    }
  </FinalField>

export default RadioButton
