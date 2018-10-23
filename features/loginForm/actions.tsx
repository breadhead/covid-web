import axios from 'axios'
import { Dispatch } from 'redux'

import { actions } from './reducer'

export const login = (credentials) => async (
  dispatch: Dispatch<any>,
  getState,
  apiContainer,
) => {

  try {
    dispatch(actions.request())
    const { data: { token } } = await apiContainer.api.login(credentials)
    return dispatch(actions.success(token))
  } catch (error) {
    return dispatch(actions.error(error.message))
  }

}
