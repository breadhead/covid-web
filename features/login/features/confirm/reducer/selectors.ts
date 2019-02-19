import { State } from '@app/lib/store'

export const getSmsPhone = (state: State) => state.login.confirm.smsPhone.phone
