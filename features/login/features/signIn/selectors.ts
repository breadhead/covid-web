import { State } from '@app/lib/store'

export const getViolateState = (state: State) =>
  state.login.signIn.authViolateStatus

export const getWantTo = (state: State) => state.login.user.wantTo
