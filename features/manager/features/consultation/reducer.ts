import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { QuotaClaim } from '@app/models/Claim/QuotaClaim'

interface State extends FetchingState {
  claim: any
}

interface Actions extends FetchingActions {
  success(claim: any): Action
}

const initialState = createInitialState({
  claim: {
    shortClaim: {},
    situationClaim: {},
    quotaClaim: {},
  },
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, claim: QuotaClaim) => ({
    ...state,
    claim,
    error: false,
    fetching: false,
  }),
  'manager/consultation',
)

export { State, reducer, Actions, actions }
