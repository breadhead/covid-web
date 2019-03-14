import * as React from 'react'
import * as styles from './BurgerButton.css'

import IconCustom from '@app/ui/IconCustom'

export interface Props {
  show: () => void
}

const BurgerButton = ({ show }: Props) => (
  <button className={styles.openButton} onClick={show}>
    открыть меню
    <IconCustom className={styles.NavIcon} name="24x24_burger-menu" />
  </button>
)

export default BurgerButton
