import { State } from '@app/lib/store'


export const getUserEmail = (state: State) => state.login.user.email
