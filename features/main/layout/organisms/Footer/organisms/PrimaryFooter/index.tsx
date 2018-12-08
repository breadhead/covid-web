import * as React from 'react'
import * as styles from './PrimaryFooter.css'

import BottomRow from './organisms/BottomRow'
import MiddleRow from './organisms/MiddleRow'
import TopRow from './organisms/TopRow'

const PrimaryFooter = () => (
  <footer className={styles.footer}>
    <TopRow className={styles.row} />
    <MiddleRow className={styles.row} />
    <BottomRow className={styles.row} />
  </footer>
)

export default PrimaryFooter
