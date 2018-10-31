import { Select } from 'antd'
import * as React from 'react'
import { orderToLabel } from './helpers/orderToLabel'

export enum Order {
  Name = 'name',
  Count = 'count',
  DateNew = 'date-now',
  DateOld = 'date-old',
}

interface Props {
  onChange: (order: Order) => void
  activeOrder: Order
}

const Sorting = ({ onChange, activeOrder }: Props) => {
  return (
    <Select
      defaultValue={activeOrder}
      onSelect={(e) => onChange(e as Order)} /* due to typings of antd */
    >
      {Object.values(Order).map((value) =>
        <Select.Option key={value} value={value}>{orderToLabel(value)}</Select.Option>,
      )}
    </Select>
  )
}

export default Sorting
