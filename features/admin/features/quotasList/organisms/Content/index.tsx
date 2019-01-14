import React from 'react'

import { Quota, QuotaType } from '@app/models/Quota/Quota'

import Filters, { Filter } from '../Filters'
import QuotasList from '../QuotasList'
import Search from '../Search'
import Sorting, { Order } from '../Sorting'
import * as styles from './Content.css'
import ContentComponent from './ContentComponent'

export interface Props {
  quotas: Quota[]
  totalCount: number
  countByTypes: { [key in keyof typeof QuotaType]: number }

  activeOrder: Order
  changeOrder: (order: Order) => void

  activeFilter: Filter
  changeFilter: (filter: Filter) => void

  searchQuery?: string
  changeSearchQuery: (value: string) => void
  // TODO: fix types
  search?: any
  sorting?: any
  filters?: any
  list?: any
}

// if we want to get the default view of quotas list, we render this component like in page component
//  but if we want to use the same data and logic and get different view, we pass components via
// __search__, __sorting__, etc props
// also we can pass __false__ to __search__ or __sorting__ to prevent a component from rendering

const Content: React.SFC<Props> = ({
  changeSearchQuery,
  searchQuery,
  changeOrder,
  activeOrder,
  changeFilter,
  activeFilter,
  totalCount,
  countByTypes,
  quotas,
  search,
  sorting,
  filters,
  list,
}) => (
  <>
    <div className={styles.settings}>
      <ContentComponent
        Component={Search}
        PassedValue={search}
        onChange={changeSearchQuery}
        value={searchQuery}
      />
      <ContentComponent
        Component={Sorting}
        PassedValue={sorting}
        onChange={changeOrder}
        activeOrder={activeOrder}
        className={styles.rowEnd}
      />
      <ContentComponent
        Component={Filters}
        PassedValue={filters}
        onChange={changeFilter}
        activeFilter={activeFilter}
        totalCount={totalCount}
        countByTypes={countByTypes}
        className={styles.allRow}
      />
    </div>

    <ContentComponent
      Component={QuotasList}
      PassedValue={list}
      quotas={quotas}
    />
  </>
)
export default Content
