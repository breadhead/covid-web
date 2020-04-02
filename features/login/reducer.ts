import { combineReducers } from 'redux'


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
  signIn: SignInState
  signUp: SignUpState
  user: UserState
}

export const reducer = combineReducers<State>({
  signIn: signInReducer,
  signUp: signUpReducer,
  user: userReducer,
} as any)
