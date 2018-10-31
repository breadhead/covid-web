import React from 'react'

import { Quota, QuotaType } from '@app/models/Quota/Quota'
import Filters, { Filter } from '../organisms/Filters'
import Header from '../organisms/Header'
import QuotasList from '../organisms/QuotasList'
import Sorting, { Order } from '../organisms/Sorting'

export interface Props {
  quotas: Quota[]
  totalCount: number
  countByTypes: {
    [key in keyof QuotaType]: number
  }

  activeOrder: Order
  changeOrder: (order: Order) => void

  activeFilter: Filter
  changeFilter: (filter: Filter) => void
}

const Page: React.SFC<Props> = ({
  changeOrder, activeOrder,
  changeFilter, activeFilter,
  totalCount, countByTypes, quotas,
}) =>
  <main>
    <Header />
    <Sorting
      onChange={changeOrder}
      activeOrder={activeOrder}
    />
    <Filters
      onChange={changeFilter}
      activeFilter={activeFilter}
      totalCount={totalCount}
      countByTypes={countByTypes}
    />
    <QuotasList quotas={quotas} />
  </main>

export default Page
