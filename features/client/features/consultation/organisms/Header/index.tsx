import * as React from 'react'

import cx from 'classnames'

import * as styles from './Header.css'

import IconCustom from '@app/ui/atoms/IconCustom'

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>Консультация</h1>
    <span className={styles.number}>32942</span>
    <div className={styles.icons}>
      <button className={cx(styles.button, styles.downloadButton)}>
        <IconCustom className={styles.icon} name="download_light" />
      </button>
      <button className={cx(styles.button, styles.printButton)}>
        <IconCustom className={styles.icon} name="print_light" />
      </button>
    </div>
  </header>
)

export default Header
