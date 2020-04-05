import {State} from '@app/src/lib/store';

export const getSignInError = (state: State) =>
  state.login.signIn && state.login.signIn.signInError;
