
import { State } from '@app/lib/store'

export const getLoginError = (state: State) => state.login.error
