import { State } from '@app/lib/store'

export const getChangingCorporateStatus = (state: State) =>
  state.domain.claim.changeCorporateStatus
