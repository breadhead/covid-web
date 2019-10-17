import { Action } from 'redux'
import {
  createFetchingSymbiote,
  createInitialState,
  FetchingState,
  FetchingActions,
} from '@app/lib/symbioteFactory'
import { RatingQuestionI } from '../../organisms/RatingQuestion/RatingQuestionI'

interface Actions extends FetchingActions {
  fetchRatingQuestions(data: RatingQuestionI[] | []): Action
}

interface State extends FetchingState {
  data: RatingQuestionI[]
}

const initialState = createInitialState({
  data: [],
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State) => ({
    ...state,
  }),
  'client/fetch-rating-questions',
  {
    fetchRatingQuestions: (state: State, data: RatingQuestionI[]) => ({
      ...state,
      data,
      fetching: false,
      error: false,
    }),
  },
)

export { State, reducer, Actions, actions }
