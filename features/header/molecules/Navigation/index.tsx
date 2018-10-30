import NavLink from '@app/ui/atoms/NavLink'
import * as React from 'react'

import styles from './Navigation.css'

const Navigation = () => <nav className={styles.Navigation}>
  <NavLink href="/quotas">Квоты</NavLink>
  <NavLink href="/login">Логин</NavLink>
  <NavLink href="/create-quota">Создать квоту</NavLink>
</nav>

export default Navigation
