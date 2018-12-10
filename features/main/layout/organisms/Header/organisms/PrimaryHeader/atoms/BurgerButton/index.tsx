import * as React from 'react'
import * as styles from './BurgerButton.css'

export interface Props {
  onClick: () => void
  isVisible: boolean
}

const BurgerButton = ({ isVisible = false, onClick }: Props) =>
  isVisible ? (
    <button className={styles.button} onClick={onClick}>
      открыть меню
    </button>
  ) : null

export default BurgerButton
