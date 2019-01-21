import { State } from '@app/lib/store'

export const getToken = (state: State) => state.login.user.token
export const getRoles = (state: State) => state.login.user.roles
