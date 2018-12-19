import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { ShortClaim } from '@app/models/Claim/ShortClaim'

interface State extends FetchingState {
  claims: ShortClaim[]
  loaded: boolean
}

interface Actions extends FetchingActions {
  success(claims: ShortClaim[]): Action
}

const initialState = createInitialState({
  claims: [],
  loaded: false,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, claims: ShortClaim[]) => ({
    ...state,
    claims,
    loaded: true,
  }),
  'client/claims',
)

export { State, reducer, Actions, actions }
