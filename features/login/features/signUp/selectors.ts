import { State } from '@app/lib/store'

export const getSignUpError = (state: State) =>
  state.login.signUp && state.login.signUp.signUpError
