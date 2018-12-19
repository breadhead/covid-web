import { Dispatch } from 'redux'
import { actions } from './reducer'

import { ExtraArgs, State } from '@app/lib/store'

export const fetchClaims = () => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {
  try {
    dispatch(actions.request())
    const claims = await api.claimsForClient()
    return dispatch(actions.success(claims))
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
