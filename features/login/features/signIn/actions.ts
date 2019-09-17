import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import redirectUser from '../redirect'
import { actions as userActions } from '../user'
import { setCookie } from './helpers/setAuthToken'
import { actions } from './reducer'

export const loginAction = (
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
    const { message, fields, code } = error.response.data

    dispatch(actions.error(error.message))
    dispatch(actions.signInError({ message, fields, code }))
    throw error
  }
}
