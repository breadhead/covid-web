export enum TransactionKind {
  Income = 'Income',
  Transfer = 'Transfer',
}

export interface Transaction {
  from: string,
  to: string,
  amount: number,
  date: Date,
  kind: TransactionKind
}
