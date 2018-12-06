import { State } from '@app/lib/store'

export const getSendSuccess = (state: State) => state.login.confirm.sendSms && !state.login.confirm.sendSms.error

export const getCodeValid = (state: State) => state.login.confirm.validateCode.valid
