import { Checkbox as AntCheckbox, Form as AntForm } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

import './Checkbox.css?CSSModulesDisable'

const FormItem = AntForm.Item

interface Props {
  name: string
  className?: string
  label?: string
  children?: React.ReactNode
  checked?: boolean
  disabled?: boolean
}

const Checkbox = ({
  name,
  className,
  label,
  children,
  checked,
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
          checked
          disabled
          {...rest}
        >
          {children}
        </AntCheckbox>
      </FormItem>
    )}
  </FinalField>

export default Checkbox
