import { List } from 'antd'
import * as React from 'react'

import { Transaction } from '@app/models/Quota/Transaction'
import TransactionItem from '../../molecule/TransactionItem'

interface Props {
  transations: Transaction[]
}

const TransactionList = ({ transations }: Props) => {
  return (
    <List
      size="large"
      bordered
      dataSource={transations}
      renderItem={
        (transation: Transaction) => <TransactionItem {...transation} />
      }
    />
  )
}

export default TransactionList
