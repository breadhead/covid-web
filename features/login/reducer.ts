import { combineReducers } from 'redux'

import {
  reducer as confirmReducer,
  State as ConfirmState,
} from './features/confirm'

import {
  reducer as signInReducer,
  State as SignInState,
} from './features/signIn'

import { reducer as tokenReducer, State as TokenState } from './features/token'

export interface State {
  confirm: ConfirmState
  signIn: SignInState
  token: TokenState
}

export const reducer = combineReducers<State>({
  confirm: confirmReducer,
  signIn: signInReducer,
  token: tokenReducer,
} as any)
