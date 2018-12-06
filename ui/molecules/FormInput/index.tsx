import { Form as AntForm } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

import Input, { Props as InputProps } from '@app/ui/atoms/Input'

import './FormInput.css?CSSModulesDisable'

const FormInput = ({
  name,
  type,
  className,
  onChange,
  ...rest
}: InputProps) =>
  <FinalField name={name} type={type}>
    {({ input, meta }) => (
      <AntForm.Item
        validateStatus={meta.submitError && 'error'}
        help={meta.submitError}
      >
        <Input
          name={name}
          type={type}
          {...input}
          {...rest}
        />
      </AntForm.Item>
    )}
  </FinalField>

export default FormInput
