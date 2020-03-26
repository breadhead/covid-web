import React from 'react'
import Dropdown from '@app/ui/Dropdown'

import cx from 'classnames'
import * as styles from './Menu.css'

interface Props {
  signOut: () => void
  className?: string
}

const Menu = ({ signOut, className }: Props) => (
  <nav className={cx(styles.menu, className)}>
    <div className={styles.menuItem}>
      <Dropdown signOut={signOut} />
    </div>
  </nav>
)

export default Menu
