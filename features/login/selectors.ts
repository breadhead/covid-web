
import { State } from '@app/lib/store'

export const getLoginError = (state: State) => state.login.error

export const getViolateState = (state: State) => state.login.authViolateStatus
