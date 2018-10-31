import ApiClient from '@app/lib/api/ApiClient'
import { State } from '@app/lib/store'
import { Dispatch } from 'redux'
// import { throwAuthErrorFurther } from '../login'
import { actions } from './reducer'

export const fetchQuota = (id) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  apiContainer: { api: ApiClient },
) => {
  try {

    debugger
    dispatch(actions.request())
    // TODO: add id getting
    const quota = await apiContainer.api.quota(id)
    return dispatch(actions.success(quota))
  } catch (error) {
   
    dispatch(actions.error(error.message))

    throw error
  }
}
