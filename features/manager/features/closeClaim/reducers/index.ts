import { combineReducers } from 'redux'

import {
  Actions as CloseClaimActions,
  actions as closeClaimActions,
  reducer as closeClaimReducer,
  State as closeClaimState,
} from './closeClaim'

import {
  Actions as CloseDataActions,
  actions as closeDataActions,
  reducer as closeDataReducer,
  State as closeDataState,
} from './closeData'

export interface Actions {
  closeClaim: CloseClaimActions
  closeData: CloseDataActions
}

export interface State {
  closeClaim: closeClaimState
  closeData: closeDataState
}

export const actions = {
  closeClaim: closeClaimActions,
  closeData: closeDataActions,
}

export const reducer = combineReducers({
  closeClaim: closeClaimReducer,
  closeData: closeDataReducer,
} as any)
