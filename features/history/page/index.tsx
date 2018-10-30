import * as React from 'react'

import { Transaction } from '@app/models/Quota/Transaction'
import Header from '../organisms/Header'
import TransactionList from '../organisms/TransactionList'
import * as styles from './page.css'
export interface Props {
  transactions: Transaction[]
}

const HistoryPage = ({ transactions }: Props) => {

  return (
    <section className={styles.wrapper}>
      <Header />
      <TransactionList transations={transactions} />
    </section>
  )
}

export default HistoryPage
