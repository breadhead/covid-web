import { State } from '@app/lib/store'

export const getQuotaClaim = (state: State) => state.client.consultation.claim
