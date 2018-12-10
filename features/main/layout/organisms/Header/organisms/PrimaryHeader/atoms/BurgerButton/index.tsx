import * as React from 'react'
import * as styles from './BurgerButton.css'

export interface Props {
  show: () => void
  hide: () => void
  isMenuVisible: boolean
}

const BurgerButton = ({ isMenuVisible, show, hide }: Props) =>
  isMenuVisible ? (
    <button className={styles.closeButton} onClick={hide}>
      закрыть меню
    </button>
  ) : (
    <button className={styles.openButton} onClick={show}>
      открыть меню
    </button>
  )

export default BurgerButton
