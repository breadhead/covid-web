import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'

import { actions } from './reducer'

export const restorePassword = (login: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs
) => {
  const api = getApi(getState)
  try {
    dispatch(actions.request())
    await api.restorePassword(login)

  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
