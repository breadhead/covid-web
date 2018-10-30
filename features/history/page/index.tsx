import * as React from 'react'

import { Transaction } from '@app/models/Quota/Transaction'
import TransactionList from '../organisms/TransactionList'

export interface Props {
  transactions: Transaction[]
}

const HistoryPage = ({ transactions }: Props) => {

  return (
    <TransactionList transations={transactions} />
  )
}

export default HistoryPage
