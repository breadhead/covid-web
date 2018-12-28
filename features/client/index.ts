import { combineReducers } from 'redux'

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

export {
  Step2Page as ClaimStep2,
  Step3Page as ClaimStep3,
} from './features/editClaim'

export { default as WaitingPage } from './features/waitingAnswer'

export { default as BeforeConsultation } from './features/beforeConsultation'

export { default as FormFinish } from './features/formFinish'

export interface State {
  claims: ClaimsState
  newClaim: NewClaimState
}

export const reducer = combineReducers({
  claims: claimReducer,
  newClaim: newClaimReducer,
} as any)
