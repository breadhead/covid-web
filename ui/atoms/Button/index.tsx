import { Button as AntButton } from 'antd'
import cx from 'classnames'
import * as React from 'react'

import './Button.css?CSSModulesDisable'

export enum ButtonType {
  Button = 'button',
  Submit = 'submit',
}

export enum ButtonSize {
  Small = 's',
  Medium = 'm',
  Large = 'l',
  ExtraLarge = 'xl',
}

export enum ButtonKind {
  Primary = 'primary',
  Secondary = 'secondary',
  Extra = 'extra',
}

export interface Props {
  type?: ButtonType
  className?: string
  label?: string
  size?: ButtonSize
  disabled?: true
  kind?: ButtonKind
  children?: React.ReactNode
  onClick?: () => void
}

const Button = ({
  type = ButtonType.Button,
  size = ButtonSize.Medium,
  kind = ButtonKind.Primary,
  children,
  className,
  ...rest
}: Props) => (
  <AntButton
    className={cx(`ant-btn-${size} ant-btn-${kind}`, className)}
    htmlType={type}
    {...rest}
  >
    {children}
  </AntButton>
)

export default Button
