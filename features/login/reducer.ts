import { combineReducers } from 'redux'

import {
  reducer as confirmReducer,
  State as ConfirmState,
} from './features/confirm'

import {
  reducer as signInReducer,
  State as SignInState,
} from './features/signIn'

import { reducer as userReducer, State as UserState } from './features/user'

export interface State {
  confirm: ConfirmState
  signIn: SignInState
  user: UserState
}

export const reducer = combineReducers<State>({
  confirm: confirmReducer,
  signIn: signInReducer,
  user: userReducer,
} as any)
