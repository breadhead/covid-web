import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { QuotaClaim } from '@app/models/Claim/QuotaClaim'

interface State extends FetchingState {
  claim?: QuotaClaim
}

interface Actions extends FetchingActions {
  success(claim: QuotaClaim): Action
}

const initialState = createInitialState({
  claim: undefined,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, claim: QuotaClaim) => ({
    ...state,
    claim,
  }),
  'common/consultation',
)

export { State, reducer, Actions, actions }
