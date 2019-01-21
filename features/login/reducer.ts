import { combineReducers } from 'redux'

import {
  reducer as confirmReducer,
  State as ConfirmState,
} from './features/confirm'

import {
  reducer as signInReducer,
  State as SignInState,
} from './features/signIn'

import {
  reducer as signUpReducer,
  State as SignUpState,
} from './features/signUp'

import { reducer as userReducer, State as UserState } from './features/user'

export interface State {
  confirm: ConfirmState
  signIn: SignInState
  signUp: SignUpState
  user: UserState
}

export const reducer = combineReducers<State>({
  confirm: confirmReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  user: userReducer,
} as any)
