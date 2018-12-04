import { Button as AntButton, Form as AntForm } from 'antd'
import cx from 'classnames'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'
import './Button.css?CSSModulesDisable'

const FormItem = AntForm.Item

const defaultClassNames = {
  wrapperClassName: '',
  buttonClassName: '',
}

export enum ButtonType {
  button = 'button',
  submit = 'submit',
}

export enum ButtonSize {
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
}

export enum ButtonKind {
  primary = 'primary',
  secondary = 'secondary',
  extra = 'extra',
}

interface Props {
  type?: ButtonType,
  classNames?: {
    wrapperClassName?: string,
    buttonClassName?: string,
  }
  label?: string,
  size?: ButtonSize,
  disabled?: true
  kind?: ButtonKind
  children?: any
}

const Button = ({
  type = ButtonType.button,
  classNames = defaultClassNames,
  label,
  size = ButtonSize.m,
  kind = ButtonKind.primary,
  children,
  ...rest
}: Props) =>
  <FinalField name="" type={type}>
    {({ input, meta }) => (
      <FormItem
        className={classNames.wrapperClassName}
        validateStatus={meta.submitError && 'error'}
        help={meta.submitError}
      >
        {label && <label>{label}</label>}
        <AntButton
          className={cx(`ant-btn-${size} ant-btn-${kind}`, classNames.buttonClassName)}
          htmlType={type}
          {...input}
          {...rest}
        >
          {children}
        </AntButton>
      </FormItem>
    )}
  </FinalField>

export default Button
