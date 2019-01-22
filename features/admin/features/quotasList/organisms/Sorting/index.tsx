import { Select } from 'antd'
import * as React from 'react'

import { Order, orderToLabel } from './helpers/orderToLabel'
import * as styles from './Sorting.css'

interface Props {
  onChange: (order: Order) => void
  activeOrder: Order
  className?: string
}

const Sorting = ({ className, onChange, activeOrder }: Props) => {
  return (
    <section className={className}>
      {'Сортировать по '}
      <Select
        className={styles.Select}
        defaultValue={activeOrder}
        onSelect={e => onChange(e as Order)} /* due to typings of antd */
      >
        {Object.values(Order).map(value => (
          <Select.Option key={value} value={value}>
            {orderToLabel(value)}
          </Select.Option>
        ))}
      </Select>
    </section>
  )
}

export default Sorting

export { Order }
