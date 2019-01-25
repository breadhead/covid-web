import * as React from 'react'
import * as styles from './Header.css'

import Logo from '@app/ui/atoms/Logo'
import { ToXl, Xl } from '@app/ui/molecules/MediaQuery'
import Menu from './organisms/Menu'
import Navigation from './organisms/Navigation'

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Logo wrapperClassName={styles.logo} />
        <ToXl>
          <Menu />
        </ToXl>
        <Xl>
          <Navigation />
        </Xl>
      </header>
    </div>
  )
}

export default Header
