import { Form as AntForm, Switch as AntSwitch } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

const FormItem = AntForm.Item

interface Props {
  name: string
  checkedChildren?: string
  unCheckedChildren?: string
  className?: string
  label?: string
  placeholder?: string
  required?: true
  onChange?: any
  defaultChecked?: boolean
}

const Switch = ({
  name,
  className,
  label,
  placeholder,
  checkedChildren,
  unCheckedChildren,
  onChange,
  defaultChecked,
  ...rest
}: Props) =>
  <FinalField name={name} type="checkbox">
    {(fieldProps) => (
      <FormItem
        validateStatus={fieldProps.meta.submitError && 'error'}
        help={fieldProps.meta.submitError}
      >
        {label && <label htmlFor={name}>{label}</label>}
        <AntSwitch
          checkedChildren={checkedChildren}
          unCheckedChildren={unCheckedChildren}
          defaultChecked={defaultChecked}
          onChange={fieldProps.input.onChange}
          {...rest}
        />
      </FormItem>
    )}
  </FinalField>
export default Switch
