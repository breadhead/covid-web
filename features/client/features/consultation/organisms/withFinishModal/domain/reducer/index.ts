import {
  reducer as submitRatingAnswerReducer,
  State as submitRatingAnswerReducerState,
} from './submitRatingAnswer'
import { combineReducers } from 'redux'

export interface State {
  ratingAnswer: submitRatingAnswerReducerState
}

export const reducer = combineReducers({
  ratingAnswer: submitRatingAnswerReducer,
} as any)
