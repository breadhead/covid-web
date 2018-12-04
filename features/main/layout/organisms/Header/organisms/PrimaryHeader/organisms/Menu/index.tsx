import * as React from 'react'
import * as styles from './Menu.css'

import { default as NavLink, Type } from '@app/ui/atoms/NavLink'
import { default as Button, Kind } from '@app/ui/molecules/Button'

const Menu = () =>
  <nav className={styles.menu}>
    <NavLink type={Type.nav} href="#" className={styles.link}>Партнёры</NavLink>
    <NavLink type={Type.nav} href="#" className={styles.link}>Эксперты</NavLink>
    <NavLink type={Type.nav} href="#" className={styles.link}>Контакты</NavLink>
    <NavLink type={Type.nav} href="#" className={styles.link}>Помочь проекту</NavLink>
    <Button kind={Kind.secondary}>Войти</Button>
  </nav>

export default Menu
