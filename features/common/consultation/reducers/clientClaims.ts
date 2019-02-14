import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { ShortClaim } from '@app/models/Claim/ShortClaim'

interface State extends FetchingState {
  clientClaims?: ShortClaim[]
}

interface Actions extends FetchingActions {
  success(clientClaims: ShortClaim[]): Action
}

const initialState = createInitialState({
  clientClaims: undefined,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state, clientClaims) => ({
    ...state,
    fetching: false,
    error: false,
    clientClaims,
  }),
  'manager/client/claim',
)

export { State, reducer, Actions, actions }
