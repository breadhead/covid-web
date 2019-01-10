import * as React from 'react'

import Badge from '../Badge'
import * as styles from './Header.css'

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>Консультация</h1>
    <span className={styles.number}>32942</span>
  </header>
)

export default Header
