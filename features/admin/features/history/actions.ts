import { Dispatch } from 'redux'

import { ExtraArgs, State } from '@app/lib/store'
import { actions } from './reducer'

export const fetchHistory = (from?: Date, to?: Date) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  try {
    dispatch(actions.request())
    const transactions = await api.history(from, to)

    return dispatch(actions.success(transactions))
  } catch (error) {
    await dispatch(actions.error(error.message))

    throw error
  }
}
