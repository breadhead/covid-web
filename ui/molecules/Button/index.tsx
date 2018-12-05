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
  Button = 'button',
  Submit = 'submit',
}

export enum ButtonSize {
  Small = 'Small',
  Medium = 'Sedium',
  Large = 'Large',
  ExtraLarge = 'ExtraLarge',
}

export enum ButtonKind {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Extra = 'Extra',
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
  type = ButtonType.Button,
  classNames = defaultClassNames,
  label,
  size = ButtonSize.Medium,
  kind = ButtonKind.Primary,
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
