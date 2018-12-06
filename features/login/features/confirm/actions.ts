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

    dispatch(actions.sendSms.success(true))
  } catch (error) {
    dispatch(actions.sendSms.success(false))
    dispatch(actions.sendSms.error(error))
    throw error
  }
}
