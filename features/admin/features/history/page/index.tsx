import * as React from 'react'

import Layout from '@app/features/admin/organisms/Layout'
import { Transaction } from '@app/models/Quota/Transaction'
import Loader from '@app/ui/Loader'
import { orderBy } from 'lodash'

import Header from '../organisms/Header'
import TransactionList from '../organisms/TransactionList'
import * as styles from './page.css'

export interface Props {
  transactions: Transaction[]
  loading: boolean
  fetch: (from?: Date, to?: Date) => Promise<void>
}

const HistoryPage = ({ fetch, transactions, loading }: Props) => {
  const sortedTransactions = orderBy(transactions, ['date'], ['desc'])
  return (
    <Layout>
      <section className={styles.wrapper}>
        <Header onChangePeriod={fetch} />
        {!loading ? (
          <TransactionList transations={sortedTransactions} />
        ) : (
          <Loader />
        )}
      </section>
    </Layout>
  )
}

export default HistoryPage
