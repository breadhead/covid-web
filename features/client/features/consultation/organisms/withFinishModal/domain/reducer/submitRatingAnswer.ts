import {
  FetchingActions,
  FetchingState,
  createFetchingSymbiote,
  createInitialState,
} from '@app/lib/symbioteFactory'

import { Action } from 'redux'
import { RatingAnswerI } from '../../organisms/RatingQuestion/types/RatingAnswerI'

interface Actions extends FetchingActions {
  submitRatingAnswer(data: RatingAnswerI | null): Action
}

interface State extends FetchingState {
  data: RatingAnswerI | null
}

const initialState = createInitialState({
  data: null,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State) => ({
    ...state,
  }),
  'client/submit-question-answer',
  {
    submitRatingAnswer: (state: State, data: RatingAnswerI | null) => ({
      ...state,
      data,
      fetching: false,
      error: false,
    }),
  },
)

export { State, reducer, Actions, actions }
