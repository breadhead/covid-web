import { ExtraArgs, State } from '@app/lib/store'
import routes from '@app/routes'
import { Dispatch } from 'redux'
import redirectUser from '../redirect'
import { actions as userActions } from '../user'
import { setCookie } from './helpers/setAuthToken'
import { actions } from './reducer'

const Router = routes.Router

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
    if (wantTo.length > 0) {
      Router.push(wantTo)
    } else {
      redirectUser(roles)
    }
    return dispatch(actions.success(token))
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
