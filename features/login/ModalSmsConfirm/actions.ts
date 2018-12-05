import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { setAuthToken } from './helpers/setAuthToken'
import { actions } from './reducer'

export const sendSms = (number: string) => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {

  try {
    dispatch(actions.request())
    sendSms(number)

    return dispatch(actions.success(code))
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
