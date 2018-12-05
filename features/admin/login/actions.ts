import { ExtraArgs, State } from '@app/lib/store'
import Router from 'next/router'
import { Dispatch } from 'redux'
import { setAuthToken } from './helpers/setAuthToken'
import { actions } from './reducer'

export const login = (username: string, password: string) => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {

  try {
    dispatch(actions.request())
    const { token } = await api.login(username, password)
    setAuthToken(token, api)
    Router
    .push('/admin/quotas')

    return dispatch(actions.success(token))
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }

}
