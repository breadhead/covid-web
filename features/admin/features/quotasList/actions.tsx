import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './reducer'

export const fetchQuotas = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(actions.request())

  try {
    const quotas = await api.quotas()

    return dispatch(actions.success(quotas))
  } catch (error) {
    await dispatch(actions.error(error.message))
    throw error
  }
}
