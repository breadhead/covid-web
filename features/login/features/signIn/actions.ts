import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import redirectUser from '../redirect'
import { actions as userActions } from '../user'
import { setCookie } from './helpers/setAuthToken'
import { actions } from './reducer'

export const login = (
  username: string,
  password: string,
  wantTo: string,
) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  try {
    dispatch(actions.request())
    const { token, roles } = await api.login(username, password)

    setCookie(token)
    dispatch(userActions.setToken(token))

    redirectUser(roles, wantTo)
    return dispatch(actions.success(token))
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
