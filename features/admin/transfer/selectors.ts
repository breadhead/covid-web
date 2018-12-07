import { State } from '@app/lib/store'
import { createSelector } from 'reselect'

export const getQuotasCounts = createSelector(
  (state: State) => state.quotas.data,
  quotas =>
    quotas.map(quota => ({
      count: quota.count,
      name: quota.name,
      id: quota.id,
    })),
)

export const getTransferError = (state: State) => state.transfer.error
