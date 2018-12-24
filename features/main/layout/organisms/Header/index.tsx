import * as React from 'react'
import * as styles from './Header.css'

import Logo from '@app/ui/atoms/Logo'
import Menu from './organisms/Menu'

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Logo />
        <Menu />
      </header>
    </div>
  )
}

export default Header
