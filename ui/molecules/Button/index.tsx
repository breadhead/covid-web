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

export enum Type {
  button = 'button',
  submit = 'submit',
}

export enum Size {
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
}

export enum Kind {
  primary = 'primary',
  secondary = 'secondary',
  extra = 'extra',
}

interface Props {
  type?: Type,
  classNames?: {
    wrapperClassName?: string,
    buttonClassName?: string,
  }
  label?: string,
  size?: Size,
  disabled?: true
  kind?: Kind
  children?: any
}

const Button = ({
  type = Type.button,
  classNames = defaultClassNames,
  label,
  size = Size.m,
  kind = Kind.primary,
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
