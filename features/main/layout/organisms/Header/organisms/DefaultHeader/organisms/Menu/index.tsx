import * as React from 'react'
import * as styles from './Menu.css'

import NavLink from '@app/ui/atoms/NavLink'
import Button from '@app/ui/molecules/Button'

const DefaultHeader = () =>
  <nav className={styles.menu}>
    <NavLink type="nav" className={styles.link}>Партнёры</NavLink>
    <NavLink type="nav" className={styles.link}>Эксперты</NavLink>
    <NavLink type="nav" className={styles.link}>Контакты</NavLink>
    <NavLink type="nav" className={styles.link}>Помочь проекту</NavLink>
    <Button kind="secondary">Войти</Button>
  </nav>

export default DefaultHeader
