import { combineReducers } from 'redux'

import {
  Actions as SendSmsActions,
  actions as sendSmsActions,
  reducer as sendSmsReducer,
  State as SendSmsState,
} from './sendSms'

import {
  Actions as ValidateCodeActions,
  actions as validateCodeActions,
  reducer as validateCodeReducer,
  State as ValidateCodeState,
} from './validateCode'

import {
  Actions as SmsPhoneActions,
  actions as smsPhoneActions,
  reducer as smsPhoneReducer,
  State as smsPhoneState,
} from './smsPhone'

export interface Actions {
  sendSms: SendSmsActions
  validateCode: ValidateCodeActions
  smsPhone: SmsPhoneActions
}

export interface State {
  sendSms: SendSmsState
  validateCode: ValidateCodeState
  smsPhone: smsPhoneState
}

export const reducer = combineReducers<State>({
  sendSms: sendSmsReducer,
  validateCode: validateCodeReducer,
  smsPhone: smsPhoneReducer,
} as any)

export const actions = {
  sendSms: sendSmsActions,
  validateCode: validateCodeActions,
  smsPhone: smsPhoneActions,
}
