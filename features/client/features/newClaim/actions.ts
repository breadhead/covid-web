import { Dispatch } from 'redux'

import ShortClaimRequest from '@app/lib/api/request/ShortClaimRequest'
import { ExtraArgs, State } from '@app/lib/store'

import { actions } from './reducer'

export const createClaim = (claimRequest: ShortClaimRequest) => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {
  dispatch(actions.request())
  try {
    const claim = await api.createShortClaim(claimRequest)
    dispatch(actions.success())
    return claim
  } catch (error) {
    return dispatch(actions.error(error.message))
  }
}
