import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

import {
  createInitialState,
  errorSymbiote, FetchingActions,
  FetchingState, requestSymbiote,
} from '@app/lib/symbioteFactory'
import { Transaction } from '@app/models/Quota/Transaction'

interface State extends FetchingState {
  transactions: Transaction[]
}

const initialState = createInitialState({
  transactions: [],
})

interface Actions extends FetchingActions {
  request(): Action
  success(transactions: Transaction[]): Action
}

const { actions, reducer } = createSymbiote<State, Actions>(
  initialState,
  {
    request: requestSymbiote,
    success: (state, transactions) => ({
      ...state,
      fetching: false,
      error: false,
      transactions,
    }),
    error: errorSymbiote,
  },
  'login',
)

export {
  State, reducer,
  Actions, actions,
}
