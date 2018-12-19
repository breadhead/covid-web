import { combineReducers } from 'redux'

export { default as Claims } from './features/claims'
import {
  reducer as claimReducer,
  State as ClaimsState,
} from './features/claims'

export interface State {
  claims: ClaimsState
}

export const reducer = combineReducers({
  claims: claimReducer,
} as any)
