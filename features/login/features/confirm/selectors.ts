import { State } from '@app/lib/store'

export const getSendSuccess = (state: State) => state.login.confirm.sendSms.send

export const getCodeValid = (state: State) => state.login.confirm.validateCode.valid
