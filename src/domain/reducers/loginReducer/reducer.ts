import { combineReducers } from 'redux';

import {
  reducer as signUpReducer,
  State as SignUpState,
} from '@app/src/domain/reducers/signupReducer/reducer';
import {
  reducer as signInReducer,
  State as SignInState,
} from '@app/src/domain/reducers/signInReducer/reducer';

import { reducer as userReducer, State as UserState } from '../userReducer';

export interface State {
  signIn: SignInState;
  signUp: SignUpState;
  user: UserState;
}

export const reducer = combineReducers<State>({
  signIn: signInReducer,
  signUp: signUpReducer,
  user: userReducer,
} as any);
