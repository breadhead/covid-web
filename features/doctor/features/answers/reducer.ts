import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'

type State = FetchingState

interface Actions extends FetchingActions {
  success(): Action
}

const initialState = createInitialState({})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State) => ({ ...state }),
  'doctor/answerQuestions',
)

export { State, reducer, Actions, actions }
