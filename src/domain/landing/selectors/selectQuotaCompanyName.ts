import { State } from '@app/lib/store'

export const selectQuotaCompanyName = (state: State) =>
  state.consultation.claimData &&
  state.consultation.claimData.claim &&
  state.consultation.claimData.claim.name
