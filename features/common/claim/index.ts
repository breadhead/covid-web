import { combineReducers } from 'redux'

export { default as NewClaim } from './features/newClaim'
import {
  reducer as newClaimReducer,
  State as NewClaimState,
} from './features/newClaim'

export interface State {
  newClaim: NewClaimState
}

export const reducer = combineReducers({
  newClaim: newClaimReducer,
} as any)
