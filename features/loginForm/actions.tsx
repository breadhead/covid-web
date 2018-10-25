import { Dispatch } from 'redux'
import { setAuthToken } from './helpers/setAuthToken'
import { throwAuthErrorFurther } from './helpers/throwAuthErrorFurther'
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
    throwAuthErrorFurther(error)
    return dispatch(actions.error(error.message))
  }

}
