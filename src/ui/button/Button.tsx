import cx from 'classnames'
import React, { ReactNode } from 'react'

import styles from './Button.css'
import { ButtonKind } from './ButtonKind'
import { ButtonSize } from './ButtonSize'
import { getKindClassname } from './helpers/getKindClassname'
import { getSizeClassname } from './helpers/getSizeClassname'

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
      styles[getSizeClassname(size)],
      styles[getKindClassname(kind)],
    )}
    onClick={onClick}
  >
    {children}
  </button>
)
