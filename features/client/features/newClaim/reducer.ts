import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { ShortClaim } from '@app/models/Claim/ShortClaim'

type State = FetchingState

interface Actions extends FetchingActions {
  success(claim: ShortClaim): Action
}

const initialState = createInitialState({
  claim: {},
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, claim: ShortClaim) => ({
    ...state,
    claim,
    error: false,
    fetching: false,
  }),
  'client/new-claim',
)

export { State, reducer, Actions, actions }
