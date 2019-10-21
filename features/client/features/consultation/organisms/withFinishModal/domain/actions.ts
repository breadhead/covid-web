import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions as sendAnswerActions } from './reducer/submitRatingAnswer'
import { actions as fetchQuesitonsActions } from './reducer/fetchRatingQuestions'
import { RatingAnswerI } from '../organisms/RatingQuestion/RatingAnswerI'
import { RatingQuestionI } from '../organisms/RatingQuestion/RatingQuestionI'
import { RatingQuestionType } from '../organisms/RatingQuestion/RatingQuestionType'
import { mapRatingQuesitons } from './helpers/mapRatingQuesitons'

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
