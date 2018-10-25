import ApiClient from '@app/lib/api/ApiClient'
import { State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { throwAuthErrorFurther } from '../loginForm'
import { actions } from './reducer'

export const fetchQuotas = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  apiContainer: { api: ApiClient },
) => {
  try {
    dispatch(actions.request())
    const { data } = await apiContainer.api.quotas()
    return dispatch(actions.success(data))
  } catch (error) {
    throwAuthErrorFurther(error)
    return dispatch(actions.error(error.message))
  }
}
