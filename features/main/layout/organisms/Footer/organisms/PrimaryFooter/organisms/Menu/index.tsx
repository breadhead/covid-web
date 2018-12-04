import * as React from 'react'
import * as styles from './Menu.css'

import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'

const Menu = () =>
  <nav className={styles.menu}>
    <NavLink type={NavLinkType.Nav} href="#" className={styles.link}>Партнёры</NavLink>
    <NavLink type={NavLinkType.Nav} href="#" className={styles.link}>Контакты</NavLink>
    <NavLink type={NavLinkType.Nav} href="#" className={styles.link}>Помочь проекту</NavLink>
    <NavLink type={NavLinkType.Nav} href="#" className={styles.link}>Обратная связь</NavLink>
    <NavLink type={NavLinkType.Nav} href="#" className={styles.link}>Эксперты</NavLink>
  </nav>

export default Menu
