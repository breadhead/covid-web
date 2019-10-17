import { Action } from 'redux'
import {
  createFetchingSymbiote,
  createInitialState,
  FetchingState,
  FetchingActions,
} from '@app/lib/symbioteFactory'
import { RatingQuestionI } from '../../organisms/RatingQuestion/RatingQuestionI'

interface Actions extends FetchingActions {
  fetchRatingQuestions(data: RatingQuestionI[]): Action
}

const initialState = createInitialState({
  data: {
    type: 'value',
    question: 'question',
    hint: 'hint',
  },
})

const { actions, reducer } = createFetchingSymbiote<FetchingState, Actions>(
  initialState,
  (state: FetchingState) => ({
    ...state,
  }),
  'client/fetch-rating-questions',
  {
    fetchRatingQuestions: (state: FetchingState, data: RatingQuestionI[]) => ({
      ...state,
      data,
      fetching: false,
      error: false,
    }),
  },
)

export { FetchingState as State, reducer, Actions, actions }
