import { combineReducers } from 'redux'

export { default as Consultation } from './features/consultation'
import {
  reducer as consultationReducer,
  State as QuotaAssignmentState,
} from './features/consultation'

export { default as bindQuota } from './features/bindQuota'
import {
  reducer as bindQuotaReducer,
  State as BindQuotaState,
} from './features/bindQuota'

export interface State {
  consultation: QuotaAssignmentState
  bindQuota: BindQuotaState
}

export const reducer = combineReducers({
  consultation: consultationReducer,
  bindQuota: bindQuotaReducer,
} as any)
