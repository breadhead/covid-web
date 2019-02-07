import { State } from '@app/lib/store'

export const getSituationError = (state: State) =>
  state.claim.editClaim.situation.error

export const getSituationClaim = (state: State) =>
  state.claim.editClaim.situation.claim

export const getSituationLoading = (state: State) =>
  state.claim.editClaim.situation.fetching
