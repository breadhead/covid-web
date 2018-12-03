import * as React from 'react'
import * as styles from './Menu.css'

import NavLink from '@app/ui/atoms/NavLink'

const Menu = () =>
  <nav className={styles.menu}>
    <NavLink type="nav" href="#" className={styles.link}>О проекте</NavLink>
    <NavLink type="nav" href="#" className={styles.link}>Помочь проекту</NavLink>
    <NavLink type="nav" href="#" className={styles.link}>Обратная связь</NavLink>
  </nav>

export default Menu
