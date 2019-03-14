import * as React from 'react'

import Logo from '@app/ui/Logo'

import Menu from '@app/features/manager/features/menu'

import * as styles from './Header.css'

const Header = () => (
  <header className={styles.header}>
    <Logo className={styles.logo} />
    <Menu />
  </header>
)

export default Header
