import * as React from 'react'
import * as styles from './Menu.css'

import { default as NavLink, Type } from '@app/ui/atoms/NavLink'

const Menu = () =>
  <nav className={styles.menu}>
    <NavLink type={Type.nav} href="#" className={styles.link}>О проекте</NavLink>
    <NavLink type={Type.nav} href="#" className={styles.link}>Помочь проекту</NavLink>
    <NavLink type={Type.nav} href="#" className={styles.link}>Обратная связь</NavLink>
  </nav>

export default Menu
