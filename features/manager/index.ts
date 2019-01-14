import { combineReducers } from 'redux'

export { default as Consultation } from './features/consultation'

export { default as bindQuota } from './features/bindQuota'
import {
  reducer as bindQuotaReducer,
  State as BindQuotaState,
} from './features/bindQuota'

export interface State {
  bindQuota: BindQuotaState
}

export const reducer = combineReducers({
  bindQuota: bindQuotaReducer,
} as any)
