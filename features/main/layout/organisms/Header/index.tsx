import * as React from 'react'
import * as styles from './Header.css'

import Logo from '@app/ui/atoms/Logo'
import Menu from './organisms/Menu'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
    </header>
  )
}

export default Header
