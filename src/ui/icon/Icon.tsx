import cx from 'classnames'
import * as React from 'react'
import styles from './Icon.css'
import { IconProps } from './IconProps'

export const Icon = ({ name, className }: IconProps) => (
  <>
    <svg className={cx(styles.icon, className)}>
      <use xlinkHref={`#${name}`} />
    </svg>
  </>
)
