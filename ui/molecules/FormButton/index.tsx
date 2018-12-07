import { Form as AntForm } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

import Button, { ButtonType, Props as ButtonProps } from '@app/ui/atoms/Button'

interface Props {
  wrapperClassName?: string
}

const FormButton = ({
  wrapperClassName = '',
  type = ButtonType.Button,
  children,
  ...rest
}: Props & ButtonProps) => (
  <FinalField name="" type={type}>
    {({ input, meta }) => (
      <AntForm.Item
        className={wrapperClassName}
        validateStatus={meta.submitError && 'error'}
        help={meta.submitError && meta.submitError[name]}
      >
        <Button type={type} {...rest} {...input}>
          {children}
        </Button>
      </AntForm.Item>
    )}
  </FinalField>
)

export default FormButton
