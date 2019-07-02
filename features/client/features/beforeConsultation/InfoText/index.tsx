import cx from 'classnames'

import React, { ReactNode } from 'react'

import * as styles from './InfoText.css'

interface Props {
  className?: string
  children: ReactNode
}

export const InfoText = ({ className, children }: Props) => {
  return <p className={cx(styles.text, className)}>{children}</p>
}
