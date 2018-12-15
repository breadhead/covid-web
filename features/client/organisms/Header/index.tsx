import * as React from 'react'

import Logo from '@app/ui/atoms/Logo'

import Menu from '../Menu'

import * as styles from './Header.css'

const SecondaryHeader = () => (
  <header className={styles.header}>
    <Logo className={styles.logo} />
    <Menu />
  </header>
)

export default SecondaryHeader
