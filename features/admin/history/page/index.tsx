import * as React from 'react'

import { Transaction } from '@app/models/Quota/Transaction'
import Loader from '@app/ui/atoms/Loader'
import Layout from '../../organisms/Layout'
import Header from '../organisms/Header'
import TransactionList from '../organisms/TransactionList'
import * as styles from './page.css'
export interface Props {
  transactions: Transaction[]
  loading: boolean
  fetch: (from?: Date, to?: Date) => Promise<void>
}

const HistoryPage = ({ fetch, transactions, loading }: Props) => {
  return (
    <Layout>
      <section className={styles.wrapper}>
        <Header onChangePeriod={fetch} />
        {!loading ? <TransactionList transations={transactions} /> : <Loader />}
      </section>
    </Layout>
  )
}

export default HistoryPage
