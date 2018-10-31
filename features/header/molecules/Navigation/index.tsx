import NavLink from '@app/ui/atoms/NavLink'
import React from 'react'
import styles from './Navigation.css'

const Navigation = () => <nav className={styles.Navigation}>
  <NavLink href="/quotas">Квоты</NavLink>
  <NavLink href="/login">Логин</NavLink>
  <NavLink href="/quota/0oo9JINg~uh6P2">Квота</NavLink>
  <NavLink href="/transfer">Трансфер</NavLink>
</nav>

export default Navigation
