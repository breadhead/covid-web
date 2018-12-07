import * as React from 'react'
import * as styles from './PrimaryHeader.css'

import Logo from '@app/ui/atoms/Logo'
import Menu from './organisms/Menu'

const PrimaryHeader = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
    </header>
  )
}

export default PrimaryHeader
