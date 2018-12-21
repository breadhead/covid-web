import * as React from 'react'
import * as styles from './BurgerButton.css'

import IconCustom from '@app/ui/atoms/IconCustom'

export interface Props {
  show: () => void
  isVisible: boolean
}

const BurgerButton = ({ isVisible, show }: Props) =>
  isVisible ? (
    <button className={styles.openButton} onClick={show}>
      открыть меню
      <IconCustom className={styles.NavIcon} name="24x24_burger-menu" />
    </button>
  ) : null

export default BurgerButton
