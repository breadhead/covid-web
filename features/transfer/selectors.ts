import { State } from '@app/lib/store'
import { createSelector } from 'reselect'

export const getQuotas = createSelector(
  (state: State) => state.quotas.data,
  (quotas) => quotas.reduce((acc, quota) =>
    [...acc, { count: quota.count, name: quota.name, id: quota.id }], []),
)
