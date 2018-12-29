import { Dispatch } from 'redux'

import { ExtraArgs, State } from '@app/lib/store'

import { actions } from './reducer'

export const fetchQuotaClaim = (id: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(actions.request())
  try {
    const claim = await api.quotaClaim(id)
    dispatch(actions.success(claim))
    return claim
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
