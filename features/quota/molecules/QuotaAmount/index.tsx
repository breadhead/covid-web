import * as React from 'react'
import styles from './QuotaAmount.css'

const QuotaAmount = ({ amount, color, title }) => (
  <div className={styles.QuotaAmount}>
    <h4>{title}</h4>
    <strong
      className={
        (color === 'green') ? styles.AvailableQuota : ''
      }
    >
      {amount}
    </strong>
  </div>
)

export default QuotaAmount
