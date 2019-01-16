import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import redirectUser from '../redirect'
import { actions as tokenActions } from '../token/'
import { setCookie } from './helpers/setAuthToken'
import { actions } from './reducer'

export const login = (username: string, password: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  try {
    dispatch(actions.request())
    const { token, roles } = await api.login(username, password)

    setCookie(token)
    dispatch(tokenActions.set(token, roles))

    redirectUser(roles)

    return dispatch(actions.success(token))
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
