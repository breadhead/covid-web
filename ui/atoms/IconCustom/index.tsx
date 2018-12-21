import cx from 'classnames'
import * as React from 'react'
import styles from './IconCustom.css'

interface Props {
  name: string
  className?: string
}

const IconCustom = ({ name, className }: Props) => (
  <svg
    width="24"
    height="24"
    className={cx(styles.iconCustom, styles[name], className)}
  >
    <use xlinkHref={`#${name}`} />
  </svg>
)

export default IconCustom
