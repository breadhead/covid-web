import { Action } from 'redux'
import {
  createFetchingSymbiote,
  createInitialState,
  FetchingState,
  FetchingActions,
} from '@app/lib/symbioteFactory'
import { RatingAnswerI } from '../RatingQuestion/RatingAnswerI'

interface State extends FetchingState {
  id: number
  text: string
}

interface Actions extends FetchingActions {
  submitRatingAnswer(data: RatingAnswerI): Action
}

const initialState = createInitialState({ id: 0, text: '' })

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State) => ({
    ...state,
  }),
  'client/submit-question-answer',
  {
    submitRatingAnswer: (state: State, data: RatingAnswerI) => ({
      ...state,
      data,
      fetching: false,
      error: false,
    }),
  },
)

export { State, reducer, Actions, actions }
