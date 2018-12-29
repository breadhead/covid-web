import { Dispatch } from 'redux'

import ShortClaimRequest from '@app/lib/api/request/ShortClaim'
import { ExtraArgs, State } from '@app/lib/store'

import { actions } from './reducer'

export const fetchShortClaim = (id: string) => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {
  dispatch(actions.request())
  try {
    const claim = await api.shortClaim(id)
    dispatch(actions.success(claim))
    return claim
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}

export const createClaim = (claimRequest: ShortClaimRequest) => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {
  dispatch(actions.request())
  try {
    const claim = await api.createShortClaim(claimRequest)
    dispatch(actions.success(claim))
    return claim
  } catch (error) {
    return dispatch(actions.error(error.message))
  }
}
