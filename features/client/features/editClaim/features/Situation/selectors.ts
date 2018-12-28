import { State } from '@app/lib/store'
export const getSituationError = (state: State) =>
  state.client.editClaim.situation.error
