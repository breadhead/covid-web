import * as React from 'react'

interface Props {
  from: string,
  to: string
  amount: number,
  date: Date,
}

const TransferItem = ({ from, to, amount, date }: Props) => {
  return (
    <li>{date.toLocaleString('ru')} | {from} => {to} | {amount}</li>
  )
}

export default TransferItem
