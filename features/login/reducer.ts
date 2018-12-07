import { combineReducers } from 'redux'

import {
  Actions as ConfirmActions,
  actions as confirmActions,
  reducer as confirmReducer,
  State as ConfirmState,
} from './features/confirm'

import {
  Actions as SignInActions,
  actions as signInActions,
  reducer as signInReducer,
  State as SignInState,
} from './features/signIn'

export interface Actions {
  confirm: ConfirmActions
  signIn: SignInActions
}

export interface State {
  confirm: ConfirmState
  signIn: SignInState
}

export const reducer = combineReducers<State>({
  confirm: confirmReducer,
  signIn: signInReducer,
} as any)

export const actions = {
  confirm: confirmActions,
  signIn: signInActions,
}
