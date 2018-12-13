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

export interface Actions {
  sendSms: SendSmsActions
  validateCode: ValidateCodeActions
}

export interface State {
  sendSms: SendSmsState
  validateCode: ValidateCodeState
}

export const reducer = combineReducers<State>({
  sendSms: sendSmsReducer,
  validateCode: validateCodeReducer,
} as any)

export const actions = {
  sendSms: sendSmsActions,
  validateCode: validateCodeActions,
}
