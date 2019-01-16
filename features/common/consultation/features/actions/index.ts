import { combineReducers } from 'redux'

import {
  reducer as nextStatusReducer,
  State as NextStatusState,
} from './features/nextStatus'

export interface State {
  nextStatus: NextStatusState
}

export const reducer = combineReducers({
  nextStatus: nextStatusReducer,
} as any)

export { nextStatus } from './features/nextStatus'
