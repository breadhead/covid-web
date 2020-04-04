import { State } from './node_modules/@app/src/lib/store';

export const getSignInError = (state: State) =>
  state.login.signIn && state.login.signIn.signInError;
