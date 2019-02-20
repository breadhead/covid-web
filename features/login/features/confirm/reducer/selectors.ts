import { State } from '@app/lib/store'

const getSmsPhone = (state: State) => state.login.confirm.smsPhone.phone

export default getSmsPhone
