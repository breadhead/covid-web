import * as React from 'react'
import * as styles from './BurgerButton.css'

import { Icon } from '@front/ui/icon'

export interface Props {
  show: () => void
}

const BurgerButton = ({ show }: Props) => (
  <button className={styles.openButton} onClick={show}>
    открыть меню
    <Icon className={styles.NavIcon} name="burger-menu" />
  </button>
)

export default BurgerButton
