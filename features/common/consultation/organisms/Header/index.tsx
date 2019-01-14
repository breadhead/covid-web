import * as React from 'react'

import * as styles from './Header.css'

interface Props {
  claimNumber: number
}

const Header = ({ claimNumber }: Props) => (
  <header className={styles.header}>
    <h1 className={styles.title}>Консультация</h1>
    <span className={styles.number}>{claimNumber}</span>
  </header>
)

export default Header
