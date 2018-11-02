import { State } from '@app/lib/store'

export const getCreatedQuota = (state: State) => state.quotaForm.quota

export const getCreateQuotaError = (state: State) => state.quotaForm.error
