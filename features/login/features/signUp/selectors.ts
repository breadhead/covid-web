import { State } from './node_modules/@app/src/lib/store';

export const getSignUpError = (state: State) =>
  state.login.signUp && state.login.signUp.signUpError;
