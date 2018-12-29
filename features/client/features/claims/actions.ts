import { Dispatch } from 'redux'
import { actions } from './reducer'

import { ExtraArgs, State } from '@app/lib/store'

export const fetchClaims = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  try {
    dispatch(actions.request())
    const claims = await api.claimsForClient()
    return dispatch(actions.success(claims))
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
