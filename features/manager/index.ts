import { combineReducers } from 'redux'

export { default as Consultation } from './features/consultation'
import {
  reducer as consultationReducer,
  State as QuotaAssignmentState,
} from './features/consultation'

export interface State {
  consultation: QuotaAssignmentState
}

export const reducer = combineReducers({
  consultation: consultationReducer,
} as any)
