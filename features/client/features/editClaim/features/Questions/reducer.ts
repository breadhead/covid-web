import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'

type State = FetchingState

interface Actions extends FetchingActions {
  success(claim: QuestionsClaim): Action
}

const initialState = createInitialState({
  claim: {},
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, claim: QuestionsClaim) => ({
    ...state,
    claim,
    error: false,
    fetching: false,
  }),
  'client/edit-claim/questions',
)

export { State, reducer, Actions, actions }
