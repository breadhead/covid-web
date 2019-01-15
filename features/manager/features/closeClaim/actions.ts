import { Dispatch } from 'redux'

import { fetchQuotaClaim } from '@app/features/common/consultation/actions'
import { CloseClaimRequest } from '@app/lib/api/request/CloseClaimRequest'
import { ExtraArgs, State } from '@app/lib/store'

import { actions } from './reducer'

export const closeClaim = (closeClaimRequest: CloseClaimRequest) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(actions.request())
  try {
    await api.closeClaim(closeClaimRequest)
    await dispatch(fetchQuotaClaim(closeClaimRequest.id))
    dispatch(actions.success())
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
