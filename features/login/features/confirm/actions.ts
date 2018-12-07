import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'

import { actions } from './reducer'

export const sendSms = (phone: string) => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {
  dispatch(actions.sendSms.request())

  try {
    await api.sendSms(phone)
    dispatch(actions.sendSms.success())
  } catch (error) {
    dispatch(actions.sendSms.error(error))
    throw error
  }
}

export const validateCode = (code: string) => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {
  dispatch(actions.validateCode.request())

  try {
    const valid = await api.verificateSms(code)

    dispatch(actions.validateCode.success(valid))
  } catch (error) {
    dispatch(actions.validateCode.success(false))
    dispatch(actions.validateCode.error(error))
    throw error
  }
}
