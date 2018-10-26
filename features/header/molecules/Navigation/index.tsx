import React from 'react'
import NavLink from './atoms/NavLink'
import styles from './Navigation.css'

const Navigation = () => <nav className={styles.Navigation}>
  <NavLink href="/quotas"><a>Квоты</a></NavLink>
  <NavLink href="/login"><a>Логин</a></NavLink>
  <NavLink href="/create-new-auota"><a>Создать квоту</a></NavLink>
</nav>

export default Navigation
