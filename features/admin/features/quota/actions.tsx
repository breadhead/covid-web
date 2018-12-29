import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './reducer'

export const fetchQuota = (id: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  try {
    dispatch(actions.request())
    const quota = await api.quota(id)
    return dispatch(actions.success(quota))
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}

export const income = (amount: number, quotaId: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  try {
    dispatch(actions.request())
    const quota = await api.income(amount, quotaId)
    return dispatch(actions.success(quota))
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
