import {  Form as AntForm } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

import Button, { ButtonType, Props as ButtonProps } from '@app/ui/atoms/Button'

interface Props {
  wrapperClassName?: string,
  label?: string,
}

const FormButton = ({
  wrapperClassName = '',
  type = ButtonType.Button,
  label,
  children,
  ...rest
}: Props & ButtonProps) =>
  <FinalField name="" type={type}>
    {({ input, meta }) => (
      <AntForm.Item
        className={wrapperClassName}
        validateStatus={meta.submitError && 'error'}
        help={meta.submitError}
      >
        {label && <label>{label}</label>}
        <Button type={type} {...rest} {...input} />
      </AntForm.Item>
    )}
  </FinalField>

export default FormButton
