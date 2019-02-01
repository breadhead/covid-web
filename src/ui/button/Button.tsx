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
}

export const Button = ({
  children,
  size = ButtonSize.Medium,
  kind = ButtonKind.Primary,
  onClick,
}: Props) => (
  <button
    className={cx(
      styles.button,
      styles[getSizeClassName(size)],
      styles[getKindClassName(kind)],
    )}
    onClick={onClick}
  >
    {children}
  </button>
)
