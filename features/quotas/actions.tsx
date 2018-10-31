import ApiClient from '@app/lib/api/ApiClient'
import { State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './reducer'

export const fetchQuotas = () => async (
  dispatch: Dispatch<any>,
  _: () => State,
  apiContainer: { api: ApiClient },
) => {
  dispatch(actions.request())

  try {
    const quotas = await apiContainer.api.quotas()

    return dispatch(actions.success(quotas))
  } catch (error) {
    await dispatch(actions.error(error.message))
    throw error
  }
}
