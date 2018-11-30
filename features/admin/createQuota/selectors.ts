import { State } from '@app/lib/store'

export const getCreatedQuotaId = (state: State) => state.createQuota.quotaId

export const getCreateQuotaError = (state: State) => state.createQuota.error
