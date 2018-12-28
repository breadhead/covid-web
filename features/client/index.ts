import { combineReducers } from 'redux'

export { Situation, ClaimStep3 } from './features/editClaim'
import {
  reducer as editClaimReducer,
  State as EditClaimState,
} from './features/editClaim'

export { default as Claims } from './features/claims'
import {
  reducer as claimReducer,
  State as ClaimsState,
} from './features/claims'

export { default as NewClaim } from './features/newClaim'
import {
  reducer as newClaimReducer,
  State as NewClaimState,
} from './features/newClaim'

export { default as WaitingPage } from './features/waitingAnswer'

export { default as FormFinish } from '@app/features/client'

export interface State {
  claims: ClaimsState
  newClaim: NewClaimState
  editClaim: EditClaimState
}

export const reducer = combineReducers({
  claims: claimReducer,
  newClaim: newClaimReducer,
  editClaim: editClaimReducer,
} as any)
