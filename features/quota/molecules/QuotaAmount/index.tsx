import * as React from 'react'
import styles from './QuotaAmount.css'

export enum AmountKind {
  Total = 'Total',
  Available = 'Available',
}
interface Props {
  amount: number
  title: string
  kind: AmountKind
}

const QuotaAmount = ({ amount, title, kind }: Props) => (
  <div className={styles.QuotaAmount}>
    <h4>{title}</h4>
    <strong
      className={styles[kind]}
    >
      {amount}
    </strong>
  </div>
)

export default QuotaAmount
