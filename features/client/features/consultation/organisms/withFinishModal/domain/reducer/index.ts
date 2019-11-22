import { combineReducers } from 'redux'
import {
  reducer as submitRatingAnswerReducer,
  State as submitRatingAnswerReducerState,
} from './submitRatingAnswer'

import {
  reducer as fetchRatingQuestionsReducer,
  State as fetchRatingQuestionsReducerState,
} from './fetchRatingQuestions'

export interface State {
  ratingAnswer: submitRatingAnswerReducerState
  ratingQuestions: fetchRatingQuestionsReducerState
}

export const reducer = combineReducers({
  ratingAnswer: submitRatingAnswerReducer,
  ratingQuestions: fetchRatingQuestionsReducer,
} as any)
