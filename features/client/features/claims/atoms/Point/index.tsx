import cx from 'classnames'

import styles from './Point.css'

interface Props {
  active?: boolean
  className?: string
}

const Point = ({ active, className }: Props) => (
  <div
    className={cx(
      styles.point,
      className,
      active ? styles.active : styles.inactive,
    )}
  />
)

export default Point
