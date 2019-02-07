import { combineReducers } from 'redux'

export { Situation, Questions } from './features/editClaim'
import {
  reducer as editClaimReducer,
  State as EditClaimState,
} from './features/editClaim'

export { default as Claims } from './features/claims'
import {
  reducer as claimReducer,
  State as ClaimsState,
} from './features/claims'

export { default as NewClaim } from './features/claim/newClaim'

export { default as WaitingPage } from './features/waitingAnswer'

export { default as BeforeConsultation } from './features/beforeConsultation'

export { default as Consultation } from './features/consultation'

export { default as FormFinish } from './features/formFinish'

export interface State {
  claims: ClaimsState
  editClaim: EditClaimState
}

export const reducer = combineReducers({
  claims: claimReducer,
  editClaim: editClaimReducer,
} as any)

export { themes } from './values'
