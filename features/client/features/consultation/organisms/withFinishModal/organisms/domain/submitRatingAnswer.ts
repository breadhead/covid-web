import { Action } from 'redux'
import {
  createFetchingSymbiote,
  createInitialState,
  FetchingState,
  FetchingActions,
} from '@app/lib/symbioteFactory'

interface State extends FetchingState {
  id: number
  text: string
}

interface Actions extends FetchingActions {
  submitRatingAnswer(id: number, text: string): Action
}

const initialState = createInitialState({ id: 0, text: '' })

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State) => ({
    ...state,
  }),
  'client/submit-question-answer',
  {
    submitRatingAnswer: (state: State, id: number, text: string) => ({
      ...state,
      id,
      text,
      fetching: false,
      error: false,
    }),
  },
)

export { State, reducer, Actions, actions }
