import ApiClient from '@app/lib/api/ApiClient'
import { State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { Credentials } from './container'
import { setAuthToken } from './helpers/setAuthToken'
import { actions } from './reducer'

export const login = (credentials: Credentials) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  apiContainer: { api: ApiClient },
) => {

  try {
    dispatch(actions.request())
    const { data: { token } } = await apiContainer.api.login(credentials)
    setAuthToken(token)

    return dispatch(actions.success(token))
  } catch (error) {
    return dispatch(actions.error(error.message))
  }

}
