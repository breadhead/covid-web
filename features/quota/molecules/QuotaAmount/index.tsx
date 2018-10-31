import * as React from 'react'
import styles from './QuotaAmount.css'

interface Props {
  amount: number
  color?: string
  title: string
}

const QuotaAmount = ({ amount, color, title }: Props) => (
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
