import { Dispatch } from 'redux'
import { setAuthToken } from './helpers/setAuthToken'
import { actions } from './reducer'

export const login = (credentials) => async (
  dispatch: Dispatch<any>,
  getState: () => any,
  apiContainer: () => any, // TODO: fix typings
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
