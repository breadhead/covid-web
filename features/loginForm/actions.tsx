import { Dispatch } from 'redux'

import { actions } from './reducer'

export const login = (credentials) => async (
  dispatch: Dispatch<any>,
  getState: () => any,
  apiContainer: () => any, // TODO: fix typings
) => {

  try {
    dispatch(actions.request())
    const { data: { token } } = await apiContainer.api.login(credentials)
    return dispatch(actions.success(token))
  } catch (error) {
    return dispatch(actions.error(error.message))
  }

}
