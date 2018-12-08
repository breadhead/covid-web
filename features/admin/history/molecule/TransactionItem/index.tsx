import { Transaction, TransactionKind } from '@app/models/Quota/Transaction'
import IncomeItem from './IncomeItem'
import TransferItem from './TransferItem'

const TransactionItem = (transaction: Transaction) => {
  const parsedTransaction = {
    ...transaction,
    date: new Date(transaction.date),
  }

  return transaction.kind === TransactionKind.Income ? (
    <IncomeItem {...parsedTransaction} />
  ) : (
    <TransferItem {...parsedTransaction} />
  )
}

export default TransactionItem
