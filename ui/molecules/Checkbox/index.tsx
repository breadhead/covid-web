import { Checkbox as AntCheckbox, Form as AntForm } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

import './Checkbox.css?CSSModulesDisable'

const FormItem = AntForm.Item

interface Props {
  name: string
  value: string
  className?: string
  label?: string
  children?: React.ReactNode
  disabled?: boolean
  className?: string
  checked?: boolean
  style?: React.CSSProperties
}

const Checkbox = ({
  name,
  value,
  className,
  label,
  children,
  ...rest
}: Props) =>
  <FinalField className={className} name={name}>
    {({ meta }) => (
      <FormItem
        validateStatus={meta.submitError && 'error'}
        help={meta.submitError}
      >
        <AntCheckbox
          {...rest}
          >
          {children}
        </AntCheckbox>
      </FormItem>
    )}
  </FinalField>

export default Checkbox
