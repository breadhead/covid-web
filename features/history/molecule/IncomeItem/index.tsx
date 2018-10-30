import * as React from 'react'

interface Props {
  from: string,
  amount: number,
  date: Date,
}

const IncomeItem = ({ from, amount, date }: Props) => {
  return (
    <li>{date.toLocaleString('ru')} | {from} | {amount}</li>
  )
}

export default IncomeItem
