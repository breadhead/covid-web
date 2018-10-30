import * as React from 'react'

import { Transaction, TransactionKind } from '@app/models/Quota/Transaction'
import IncomeItem from '../../molecule/IncomeItem'
import TransferItem from '../../molecule/TransaferItem'

interface Props {
  transations: Transaction[]
}

const TransactionList = ({ transations }: Props) => {
  return (
    <ul>
      {transations.map((transation) =>
        transation.kind === TransactionKind.Income
          ? <IncomeItem key={transation.date.valueOf()} {...transation} />
          : <TransferItem key={transation.date.valueOf()} {...transation} />,
      )}
    </ul>
  )
}

export default TransactionList
