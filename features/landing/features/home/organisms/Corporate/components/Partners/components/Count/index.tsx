import * as React from 'react'

import * as styles from './Count.css'

const Count = () => (
  <div className={styles.countWrapper}>
    <div className={styles.count}>
      <div className={styles.countItem}>
        <p className={styles.number}>0</p>
        <p className={styles.label}>Проведено</p>
      </div>
      <div className={styles.countItem}>
        <p className={styles.number}>128</p>
        <p className={styles.label}>Предоплачено</p>
      </div>
    </div>
  </div>
)

export default Count
