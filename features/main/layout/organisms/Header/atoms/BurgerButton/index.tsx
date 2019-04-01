import * as React from 'react'
import * as styles from './BurgerButton.css'

import { Icon } from '@front/ui/icon'
import { IconsList } from '@front/ui/sprite'

export interface Props {
  show: () => void
}

const BurgerButton = ({ show }: Props) => (
  <button className={styles.openButton} onClick={show}>
    открыть меню
    <Icon className={styles.NavIcon} name={IconsList.BurgerMenu} />
  </button>
)

export default BurgerButton
