import { State } from '@app/lib/store'

export const getViolateState = (state: State) => state.login.authViolateStatus
