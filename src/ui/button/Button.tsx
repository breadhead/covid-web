import cx from 'classnames'
import React, { ReactNode } from 'react'

import styles from './Button.css'
import { ButtonKind } from './ButtonKind'
import { ButtonSize } from './ButtonSize'
import { getKindClassName } from './helpers/getKindClassName'
import { getSizeClassName } from './helpers/getSizeClassName'

interface Props {
  children: ReactNode
  size?: ButtonSize
  kind?: ButtonKind
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined
  disabled?: boolean
}

export const Button = ({
  children,
  size = ButtonSize.Medium,
  kind = ButtonKind.Primary,
  disabled = false,
  onClick,
}: Props) => (
  <button
    className={cx(
      styles.button,
      styles[getSizeClassName(size)],
      styles[getKindClassName(kind)],
      disabled && styles.disabled,
    )}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)
