import { Checkbox as AntCheckbox, Form as AntForm } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

import './Checkbox.css?CSSModulesDisable'

const FormItem = AntForm.Item

interface Props {
  name: string
  className?: string
  children?: React.ReactNode
  defaultChecked?: boolean
  disabled?: boolean
}

const Checkbox = ({
  name,
  className,
  children,
  defaultChecked,
  disabled,
  ...rest
}: Props) =>
  <FinalField className={className} name={name}>
    {({ meta }) => (
      <FormItem
        validateStatus={meta.submitError && 'error'}
        help={meta.submitError}
      >
        <AntCheckbox
          defaultChecked={defaultChecked}
          disabled={disabled}
          {...rest}
        >
          {children}
        </AntCheckbox>
      </FormItem>
    )}
  </FinalField>

export default Checkbox
