import * as React from 'react'
import * as styles from './DefaultHeader.css'

import Logo from '@app/ui/atoms/Logo'
import Menu from './organisms/Menu'

const DefaultHeader = () => {
  return <header className={styles.header}>
    <Logo />
    <Menu />
  </header>
}

export default DefaultHeader
