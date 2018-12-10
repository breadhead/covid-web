import * as React from 'react'
import * as styles from './BurgerButton.css'

export interface Props {
  show: () => void
  isMenuVisible: boolean
}

const BurgerButton = ({ isMenuVisible, show }: Props) =>
  isMenuVisible ? null : (
    <button className={styles.openButton} onClick={show}>
      открыть меню
    </button>
  )

export default BurgerButton
