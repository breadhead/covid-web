import React from 'react'

import { Quota, QuotaType } from '@app/models/Quota/Quota'
import Filters, { Filter } from '../organisms/Filters'
import Header from '../organisms/Header'
import QuotasList from '../organisms/QuotasList'
import Search from '../organisms/Search'
import Sorting, { Order } from '../organisms/Sorting'
import * as styles from './page.css'

export interface Props {
  quotas: Quota[]
  totalCount: number
  countByTypes: { [key in keyof QuotaType]: number }

  activeOrder: Order
  changeOrder: (order: Order) => void

  activeFilter: Filter
  changeFilter: (filter: Filter) => void

  searchQuery?: string
  changeSearchQuery: (value: string) => void
}

const Page: React.SFC<Props> = ({
  changeSearchQuery,
  searchQuery,
  changeOrder,
  activeOrder,
  changeFilter,
  activeFilter,
  totalCount,
  countByTypes,
  quotas,
}) => (
  <main>
    <Header />

    <div className={styles.settings}>
      <Search onChange={changeSearchQuery} value={searchQuery} />
      <Sorting
        onChange={changeOrder}
        activeOrder={activeOrder}
        className={styles.rowEnd}
      />
      <Filters
        onChange={changeFilter}
        activeFilter={activeFilter}
        totalCount={totalCount}
        countByTypes={countByTypes}
        className={styles.allRow}
      />
    </div>

    <QuotasList quotas={quotas} />
  </main>
)

export default Page
