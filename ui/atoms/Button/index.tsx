import { Button as AntButton } from 'antd'
import cx from 'classnames'
import * as React from 'react'

import './Button.css?CSSModulesDisable'

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
  className?: string,
  label?: string,
  size?: ButtonSize,
  disabled?: true
  kind?: ButtonKind
  children?: any
  onClick?: () => void
}

const Button = ({
  type = ButtonType.Button,
  size = ButtonSize.Medium,
  kind = ButtonKind.Primary,
  children,
  className,
  ...rest
}: Props) =>
  <AntButton
    className={cx(`ant-btn-${size} ant-btn-${kind}`, className)}
    htmlType={type}
    {...rest}
  >
    {children}
  </AntButton>

export default Button
