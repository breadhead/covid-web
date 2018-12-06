import { combineReducers } from 'redux'

import {
  Actions as SendSmsActions, actions as sendSmsActions,
  reducer as sendSmsReducer, State as SendSmsState,
} from './sendSms'

export interface Actions {
  sendSms: SendSmsActions
}

export interface State {
  sendSms: SendSmsState,
}

export const reducer = combineReducers<State>({
  sendSms: sendSmsReducer,
} as any)

export const actions = {
  sendSms: sendSmsActions,
}
