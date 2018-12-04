import * as React from 'react'
import * as styles from './Menu.css'

import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'
import Button, { ButtonKind } from '@app/ui/molecules/Button'

const Menu = () =>
  <nav className={styles.menu}>
    <NavLink type={NavLinkType.nav} href="#" className={styles.link}>Партнёры</NavLink>
    <NavLink type={NavLinkType.nav} href="#" className={styles.link}>Эксперты</NavLink>
    <NavLink type={NavLinkType.nav} href="#" className={styles.link}>Контакты</NavLink>
    <NavLink type={NavLinkType.nav} href="#" className={styles.link}>Помочь проекту</NavLink>
    <Button kind={ButtonKind.secondary}>Войти</Button>
  </nav>

export default Menu
