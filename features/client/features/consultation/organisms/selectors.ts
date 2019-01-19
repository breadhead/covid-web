import { State } from '@app/lib/store'

export const getClientInfo = (state: State) =>
  !!state.consultation.claimData.mainInfo &&
  state.consultation.claimData.mainInfo
