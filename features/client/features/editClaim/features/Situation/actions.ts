import { Dispatch } from 'redux'

import { ExtraArgs, State } from '@app/lib/store'

import { actions as newClaimActions } from '@app/features/client/features/newClaim'
import { SituationClaimRequest } from '@app/lib/api/request/SituationClaim'
import { actions } from './reducer'

export const shortClaim = (id: string) => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {
  dispatch(newClaimActions.request())
  try {
    const claim = await api.shortClaim(id)
    dispatch(newClaimActions.success(claim))
    return claim
  } catch (error) {
    return dispatch(newClaimActions.error(error.message))
  }
}

export const createSituationClaim = (
  claimRequest: SituationClaimRequest,
) => async (dispatch: Dispatch<any>, _: () => State, { api }: ExtraArgs) => {
  dispatch(actions.request())
  try {
    const claim = await api.createSituationClaim(claimRequest)
    dispatch(actions.success(claim))
    return claim
  } catch (error) {
    return dispatch(actions.error(error.message))
  }
}
