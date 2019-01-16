import { combineReducers } from 'redux'

export { default as Consultation } from './features/consultation'
export { default as Layout } from './organisms/Layout'
export { default as Controls } from './features/quotaControl'

export { default as bindQuota } from './features/bindQuota'
import {
  reducer as bindQuotaReducer,
  State as BindQuotaState,
} from './features/bindQuota'

import {
  reducer as quotaControlReducer,
  State as QuotaControlState,
} from './features/quotaControl'

export { default as closeClaim } from './features/closeClaim'
import {
  reducer as closeClaimReducer,
  State as CloseClaimState,
} from './features/closeClaim'

export interface State {
  bindQuota: BindQuotaState
  quotaControl: QuotaControlState
  closeClaim: CloseClaimState
}

export const reducer = combineReducers({
  bindQuota: bindQuotaReducer,
  quotaControl: quotaControlReducer,
  closeClaim: closeClaimReducer,
} as any)
