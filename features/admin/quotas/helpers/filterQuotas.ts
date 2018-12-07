import { Quota } from '@app/models/Quota/Quota'
import { Filter } from '../organisms/Filters'

export const filterQuotas = (filter: Filter) => (quotas: Quota[]) =>
  quotas.filter((quota) => filter === 'All' || quota.type === filter)
