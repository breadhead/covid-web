import { State } from '@app/lib/store'
export const getSituationError = (state: State) =>
  state.client.editClaim.situation.error

export const getSituationClaim = (state: State) =>
  state.client.editClaim.situation.claim
