import { ExtraArgs, State } from '@app/lib/store'

import { Dispatch } from 'redux'
import { RatingAnswerI } from '../organisms/RatingQuestion/types/RatingAnswerI'
import { actions as fetchQuesitonsActions } from './reducer/fetchRatingQuestions'
import { mapRatingQuesitons } from './helpers/mapRatingQuesitons'
import { actions as sendAnswerActions } from './reducer/submitRatingAnswer'

export const submitRatingAnswerAction = (data: RatingAnswerI) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)

  try {
    await api.sendRatingQuestionAnswer(data)
    dispatch(sendAnswerActions.submitRatingAnswer(data))
  } catch (error) {
    dispatch(sendAnswerActions.error(error.message))
    throw error
  }
}

export const fetchRatingQuestionsAction = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)

  try {
    const questions = await api.fetchRatingQuestions()

    const ratingQuestions = mapRatingQuesitons(questions)
    dispatch(fetchQuesitonsActions.fetchRatingQuestions(ratingQuestions))
  } catch (error) {
    dispatch(fetchQuesitonsActions.error(error.message))
    throw error
  }
}
