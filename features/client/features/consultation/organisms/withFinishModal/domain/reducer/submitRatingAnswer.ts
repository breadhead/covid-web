import { Action } from 'redux'
import {
  createFetchingSymbiote,
  createInitialState,
  FetchingState,
  FetchingActions,
} from '@app/lib/symbioteFactory'
import { RatingAnswerI } from '../../organisms/RatingQuestion/RatingAnswerI'

interface Actions extends FetchingActions {
  submitRatingAnswer(data: RatingAnswerI): Action
}

const initialState = createInitialState({
  data: {
    claimId: 'id',
    question: 'question',
    answer: 'answer',
  },
})

const { actions, reducer } = createFetchingSymbiote<FetchingState, Actions>(
  initialState,
  (state: FetchingState) => ({
    ...state,
  }),
  'client/submit-question-answer',
  {
    submitRatingAnswer: (state: FetchingState, data: RatingAnswerI) => ({
      ...state,
      data,
      fetching: false,
      error: false,
    }),
  },
)

export { FetchingState as State, reducer, Actions, actions }
