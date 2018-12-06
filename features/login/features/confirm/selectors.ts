import { State } from '@app/lib/store'

export const getSendSuccess = ({ login }: State) => login.confirm.sendSms.send && !login.confirm.sendSms.error

export const getCodeValid = ({ login }: State) => login.confirm.validateCode.valid
