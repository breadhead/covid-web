import { State } from './node_modules/@app/src/lib/store';

export const getViolateState = (state: State) =>
  state.login.signIn.authViolateStatus;
