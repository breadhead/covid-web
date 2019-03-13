import cx from 'classnames'
import React, { ReactNode } from 'react'

import styles from './Button.css'
import { ButtonKind } from './ButtonKind'
import { ButtonSize } from './ButtonSize'
import { get } from './helpers/getButtonType'
import { getKindClassName } from './helpers/getKindClassName'
import { getSizeClassName } from './helpers/getSizeClassName'

export interface Props {
  children: ReactNode
  size?: ButtonSize
  kind?: ButtonKind
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement>) => void | undefined)
    | (() => void)
  disabled?: boolean
  submit?: boolean
  className?: string
}

export const Button = ({
  children,
  size = ButtonSize.Medium,
  kind = ButtonKind.Primary,
  disabled = false,
  submit = false,
  onClick,
  className,
  ...rest
}: Props) => (
  <button
    className={cx(
      styles.button,
      styles[getSizeClassName(size)],
      styles[getKindClassName(kind)],
      className,
    )}
    onClick={onClick}
    disabled={disabled}
    type={get(submit)}
    {...rest}
  >
    {children}
  </button>
)
