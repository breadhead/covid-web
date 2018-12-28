import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { SituationClaim } from '@app/models/Claim/SituationClaim'

type State = FetchingState

interface Actions extends FetchingActions {
  success(claim: SituationClaim): Action
}

const initialState = createInitialState({
  claim: {},
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, claim: SituationClaim) => ({
    ...state,
    claim,
    error: false,
    fetching: false,
  }),
  'client/edit-claim/situation',
)

export { State, reducer, Actions, actions }
