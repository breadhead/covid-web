import { State } from '@app/lib/store'

export const getCreatedId = (state: State) => state.client.newClaim.createdId

export const getQuotaAllocated = (state: State) =>
  state.client.newClaim.quotaAllocated
