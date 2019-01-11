import { State } from '@app/lib/store'

export const getClaimId = (state: State) =>
  state.manager.consultation.claim.shortClaim.id
