import { State } from '@app/lib/store'

export const getEditedQuotaId = (state: State) => state.createQuota.quotaId

export const getEditedQuotaError = (state: State) => state.editQuota.error
