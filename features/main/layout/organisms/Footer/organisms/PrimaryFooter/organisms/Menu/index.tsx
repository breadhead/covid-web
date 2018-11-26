import * as React from 'react'
import * as styles from './Menu.css'

import NavLink from '@app/ui/atoms/NavLink'

const Menu = () =>
  <nav className={styles.menu}>
    <NavLink type="nav" className={styles.link}>Партнёры</NavLink>
    <NavLink type="nav" className={styles.link}>Контакты</NavLink>
    <NavLink type="nav" className={styles.link}>Помочь проекту</NavLink>
    <NavLink type="nav" className={styles.link}>Обратная связь</NavLink>
    <NavLink type="nav" className={styles.link}>Эксперты</NavLink>
  </nav>

export default Menu
