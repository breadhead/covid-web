import cx from 'classnames'
import React, { ReactNode } from 'react'

import styles from './Button.css'
import { ButtonKind } from './ButtonKind'
import { ButtonSize } from './ButtonSize'
import { getButtonType } from './helpers/getButtonType'
import { getKindClassName } from './helpers/getKindClassName'
import { getSizeClassName } from './helpers/getSizeClassName'

interface Props {
  children: ReactNode
  size?: ButtonSize
  kind?: ButtonKind
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined
  disabled?: boolean
  submit?: boolean
}

export const Button = ({
  children,
  size = ButtonSize.Medium,
  kind = ButtonKind.Primary,
  disabled = false,
  submit = false,
  onClick,
}: Props) => (
  <button
    className={cx(
      styles.button,
      styles[getSizeClassName(size)],
      styles[getKindClassName(kind)],
    )}
    onClick={onClick}
    disabled={disabled}
    type={getButtonType(submit)}
  >
    {children}
  </button>
)
