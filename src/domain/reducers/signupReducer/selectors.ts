import { State } from '@app/src/lib/store';

export const getSignUpError = (state: State) =>
  state.login.signUp && state.login.signUp.signUpError;
