import { State } from '@app/lib/store'

export const getClientStatus = (state: State) =>
  !!state.consultation.claimData.mainInfo &&
  state.consultation.claimData.mainInfo.status
