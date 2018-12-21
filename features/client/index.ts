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

export interface State {
  claims: ClaimsState
  newClaim: NewClaimState
}

export const reducer = combineReducers({
  claims: claimReducer,
  newClaim: newClaimReducer,
} as any)
