import { State } from '@app/lib/store'

export const getQuota = (state: State) => state.quota.quota
export const getQuotaError = (state: State) => state.quota.error
