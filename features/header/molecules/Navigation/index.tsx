import React from 'react'
import NavLink from './atoms/NavLink'
import styles from './Navigation.css'

const Navigation = () => <nav className={styles.Navigation}>
  <NavLink href="/quotas">Квоты</NavLink>
  <NavLink href="/login">Логин</NavLink>
</nav>

export default Navigation
