import * as React from 'react'

import * as styles from './Header.css'

import IconCustom from '@app/ui/atoms/IconCustom'

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>Консультация</h1>
    <span className={styles.number}>32942</span>
    <div className={styles.icons}>
      <IconCustom className={styles.icon} name="download_light" />
      <IconCustom className={styles.icon} name="print_light" />
    </div>
  </header>
)

export default Header
