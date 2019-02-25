import { State } from '@app/lib/store'

export const getCloseClaimData = (state: State) =>
  state.manager.closeClaim.closeData.data
