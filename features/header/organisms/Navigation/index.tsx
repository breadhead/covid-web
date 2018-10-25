import React from 'react'
import NavLink from './atoms/NavLink'
const Navigation = () => <nav>
  <NavLink href="/quotas"><a>Квоты</a></NavLink>
  <NavLink href="/login"><a>Логин</a></NavLink>
</nav>

export default Navigation
