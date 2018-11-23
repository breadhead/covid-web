import * as React from 'react'
import * as styles from './Header.css'

import Logo from '@app/ui/atoms/Logo'
import NavLink from '@app/ui/atoms/NavLink'
import Button from '@app/ui/molecules/Button'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.menu}>
        <NavLink type="nav" className={styles.link}>Партнёры</NavLink>
        <NavLink type="nav" className={styles.link}>Эксперты</NavLink>
        <NavLink type="nav" className={styles.link}>Контакты</NavLink>
        <NavLink type="nav" className={styles.link}>Помочь проекту</NavLink>
        <Button kind="secondary">Войти</Button>
      </nav>
    </header>
  )
}

export default Header
