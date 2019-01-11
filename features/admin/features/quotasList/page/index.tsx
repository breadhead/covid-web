import Layout from '@app/features/admin/organisms/Layout'
import { Quota, QuotaType } from '@app/models/Quota/Quota'
import React from 'react'
import Content from '../organisms/Content'
import { Filter } from '../organisms/Filters'
import { Order } from '../organisms/Sorting'

export interface Props {
  quotas: Quota[]
  fetchQuotas: any
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

const Page: React.SFC<Props> = props => (
  <Layout>
    <Content {...props} />
  </Layout>
)

export default Page
