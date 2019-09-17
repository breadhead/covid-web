import { State } from '@app/lib/store'

export const getSignInError = (state: State) =>
  state.login.signIn && state.login.signIn.signInError
