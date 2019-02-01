import cx from 'classnames'
import * as React from 'react'
import * as styles from './ButtonWithArrow.css'

export interface ButtonWithArrowProps {
  children: string
  className?: string
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void
}

const ButtonWithArrow: React.SFC<ButtonWithArrowProps> = ({
  children,
  onClick,
  className,
  ...rest
}) => {
  return (
    <button
      className={cx(styles.button, className)}
      onClick={onClick}
      {...rest}
    >
      {children} <span className={styles.arrowDown} />
    </button>
  )
}

export default ButtonWithArrow
