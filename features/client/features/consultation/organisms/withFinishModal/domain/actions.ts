import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './reducer/submitRatingAnswer'
import { RatingAnswerI } from '../organisms/RatingQuestion/RatingAnswerI'

export const submitRatingAnswerAction = (data: RatingAnswerI) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)

  try {
    await api.sendRatingQuestionAnswer(data)
    dispatch(actions.submitRatingAnswer(data))
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
