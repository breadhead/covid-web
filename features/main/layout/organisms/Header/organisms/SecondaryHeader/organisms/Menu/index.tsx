import * as React from 'react'
import * as styles from './Menu.css'

import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'

const Menu = () =>
  <nav className={styles.menu}>
    <span className={styles.menuItem}>
      <img className={styles.icon} src="http://placecorgi.com/16/18" alt="Моя консультация" />
      <NavLink type={NavLinkType.Nav} href="#">Моя консультация</NavLink>
    </span>
    <span className={styles.menuItem}>
      <NavLink type={NavLinkType.Nav} href="#" className={styles.link}>
        <img className={styles.icon} src="http://placecorgi.com/16/18" alt="Личный кабинет" />
      </NavLink>
    </span>
  </nav>

export default Menu
