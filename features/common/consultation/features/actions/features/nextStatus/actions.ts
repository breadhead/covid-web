import { Dispatch } from 'redux'

import { ExtraArgs, State } from '@app/lib/store'

import { fetchClaim, getClaimId } from '../../../claimData'
import { actions } from './reducer'

export const nextStatus = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  const claimId = getClaimId(getState())
  dispatch(actions.request())
  try {
    await api.nextStatus(claimId!)
    await dispatch(fetchClaim(claimId!))
    dispatch(actions.success())
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
