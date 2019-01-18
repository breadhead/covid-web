import * as React from 'react'
import * as styles from './ButtonWithArrow.css'

export interface ButtonWithArrowProps {
  children: string
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void
}

const ButtonWithArrow: React.SFC<ButtonWithArrowProps> = ({
  children,
  onClick,
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children} <span className={styles.arrowDown} />
    </button>
  )
}

export default ButtonWithArrow
