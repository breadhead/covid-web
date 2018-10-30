import * as React from 'react'

import { Transaction } from '@app/models/Quota/Transaction'
import Header from '../organisms/Header'
import TransactionList from '../organisms/TransactionList'
import * as styles from './page.css'
export interface Props {
  transactions: Transaction[]
  fetch: (from?: Date, to?: Date) => Promise<void>
}

const HistoryPage = ({ fetch, transactions }: Props) => {
  return (
    <section className={styles.wrapper}>
      <Header onChangePeriod={fetch} />
      <TransactionList transations={transactions} />
    </section>
  )
}

export default HistoryPage
