import * as React from 'react'
import * as styles from './Menu.css'

import NavLink from '@app/ui/atoms/NavLink'

const Menu = () =>
  <nav className={styles.menu}>
    <NavLink type="nav" className={styles.link}>Моя консультация</NavLink>
    <NavLink type="nav" className={styles.link}>Личный кабинет</NavLink>
  </nav>

export default Menu
