import { State } from '@app/lib/store'

export const getQuotaClaim = (state: State) => state.consultation.claim

export const getMainInfo = (state: State) => state.consultation.mainInfo

export const getClaimId = (state: State) =>
  state.client.newClaim.claim && state.client.newClaim.claim.id
