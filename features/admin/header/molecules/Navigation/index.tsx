import NavLink from '@app/ui/atoms/NavLink'
import * as React from 'react'

import styles from './Navigation.css'

const Navigation = () => (
  <nav className={styles.Navigation}>
    <NavLink href="/admin/quotas">Квоты</NavLink>
    <NavLink href="/admin/login">Логин</NavLink>
    <NavLink href="/admin/create-quota">Создать квоту</NavLink>
    <NavLink href="/admin/quota/0oo9JINg~uh6P2">Квота</NavLink>
    <NavLink href="/admin/transfer">Трансфер</NavLink>
  </nav>
)

export default Navigation
