import { Dispatch } from 'redux'

import { ExtraArgs, State } from '@app/lib/store'

import { SituationClaimRequest } from '@app/lib/api/request/SituationClaim'
import { actions } from './reducer'

export const createSituationClaim = (
  claimRequest: SituationClaimRequest,
) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(actions.request())
  try {
    const claim = await api.createSituationClaim(claimRequest)
    dispatch(actions.success(claim))
    return claim
  } catch (error) {
    return dispatch(actions.error(error.message))
  }
}

export const fetchSituationClaim = (id: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(actions.request())
  try {
    const claim = await api.situationClaim(id)
    dispatch(actions.success(claim))
    return claim
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}