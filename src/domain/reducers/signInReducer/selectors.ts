import { State } from '@app/src/lib/store';

export const getViolateState = (state: State) =>
  state.login.signIn.authViolateStatus;
