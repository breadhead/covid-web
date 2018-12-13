import { Form as AntForm, Switch as AntSwitch } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

import './Switch.css?CSSModulesDisable'

const FormItem = AntForm.Item

interface Props {
  name: string
  checkedChildren?: string
  unCheckedChildren?: string
  className?: string
  label?: string
  placeholder?: string
  required?: true
  defaultChecked?: boolean
  onChange?: () => void
}

const Switch = ({ name, label, defaultChecked, ...rest }: Props) => (
  <FinalField name={name} type="checkbox">
    {({ meta, input }) => (
      <FormItem
        validateStatus={meta.submitError && 'error'}
        help={meta.submitError}
      >
        {label && <label htmlFor={name}>{label}</label>}
        <AntSwitch
          checkedChildren="Да"
          unCheckedChildren="Нет"
          defaultChecked={defaultChecked}
          {...rest}
          {...input}
        />
      </FormItem>
    )}
  </FinalField>
)

export default Switch
