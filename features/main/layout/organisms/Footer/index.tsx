import * as React from 'react'
import * as styles from './Footer.css'

import BottomRow from './organisms/BottomRow'
import MiddleRow from './organisms/MiddleRow'
import TopRow from './organisms/TopRow'

const Footer = () =>
  <footer className={styles.footer}>
    <TopRow className={styles.row} />
    <MiddleRow className={styles.row} />
    <BottomRow className={styles.row} />
  </footer>

export default Footer
