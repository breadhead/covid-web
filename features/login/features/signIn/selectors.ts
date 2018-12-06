
import { State } from '@app/lib/store'

export const getLoginError = (state: State) => state.login.signIn.error

export const getViolateState = (state: State) => state.login.signIn.authViolateStatus
