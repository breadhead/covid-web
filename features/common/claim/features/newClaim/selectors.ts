import { State } from '@app/lib/store'

export const getNewClaimError = (state: State) => state.claim.newClaim.error

export const getShortClaim = (state: State) => state.claim.newClaim.claim

export const getNewClaimLoading = (state: State) =>
  state.claim.newClaim.fetching
