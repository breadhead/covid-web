import React from 'react'
import Dropdown from '@app/ui/Dropdown'
import { Icon } from '@front/ui/icon'
import { NavLink } from '@front/ui/nav-link'
import { IconsList } from '@front/ui/sprite'
import cx from 'classnames'
import * as styles from './Menu.css'

interface Props {
  signOut: () => void
  className?: string
}

const Menu = ({ signOut, className }: Props) => (
  <nav className={cx(styles.menu, className)}>
    <NavLink
      className={cx(styles.menuItem, styles.consultation)}
      withoutUnderline
      href="/client/"
    >
      <Icon className={styles.icon} name={IconsList.MyConsultation} />
      <span className={styles.menuItemText}>Мои консультации</span>
    </NavLink>
    <div className={styles.menuItem}>
      <Dropdown signOut={signOut} />
    </div>
  </nav>
)

export default Menu
