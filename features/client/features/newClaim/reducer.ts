import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { ListedClaim } from '@app/models/Claim/ListedClaim'

interface State extends FetchingState {
  claims: ListedClaim[]
  loaded: boolean
}

interface Actions extends FetchingActions {
  success(claims: ListedClaim[]): Action
}

const initialState = createInitialState({
  claims: [],
  loaded: false,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, claims: ListedClaim[]) => ({
    ...state,
    claims,
    loaded: true,
  }),
  'client/claims',
)

export { State, reducer, Actions, actions }
