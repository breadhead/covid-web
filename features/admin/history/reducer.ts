import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { Transaction } from '@app/models/Quota/Transaction'

interface State extends FetchingState {
  transactions: Transaction[]
}

interface Actions extends FetchingActions {
  success(transactions: Transaction[]): Action
}

const initialState = createInitialState({
  transactions: [],
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state, transactions) => ({
    ...state,
    transactions,
  }),
  'login',
)

export { State, reducer, Actions, actions }
