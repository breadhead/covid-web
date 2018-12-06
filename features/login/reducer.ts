import { combineReducers } from 'redux'

import {
  Actions as ConfirmActions, actions as confirmActions,
  reducer as confirmReducer, State as ConfirmState,
} from './features/confirm'

export interface Actions {
  confirm: ConfirmActions
}

export interface State {
  confirm: ConfirmState,
}

export const reducer = combineReducers<State>({
  confirm: confirmReducer,
} as any)

export const actions = {
  confirm: confirmActions,
}
