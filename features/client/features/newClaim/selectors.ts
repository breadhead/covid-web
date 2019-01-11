import { State } from '@app/lib/store'
export const getNewClaimError = (state: State) => state.client.newClaim.error

export const getShortClaim = (state: State) => state.client.newClaim.claim
