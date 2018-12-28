import { Dispatch } from 'redux'

import { ExtraArgs, State } from '@app/lib/store'

import { actions as newClaimActions } from '@app/features/client/features/newClaim'
import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'
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

export const createQuestionsClaim = (claimRequest: QuestionsClaim) => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {
  dispatch(actions.request())
  try {
    const claim = await api.createQuestionsClaim(claimRequest)
    dispatch(actions.success(claim))
    return claim
  } catch (error) {
    return dispatch(actions.error(error.message))
  }
}
