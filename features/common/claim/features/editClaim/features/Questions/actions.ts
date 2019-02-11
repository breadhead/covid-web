import { Dispatch } from 'redux'

import { ExtraArgs, State } from '@app/lib/store'

import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'
import { actions } from './reducer'

export const createQuestionsClaim = (claimRequest: QuestionsClaim) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(actions.request())
  try {
    const claim = await api.createQuestionsClaim(claimRequest)
    dispatch(actions.success(claim))
    return claim
  } catch (error) {
    dispatch(actions.error(true))
    throw error
  }
}
