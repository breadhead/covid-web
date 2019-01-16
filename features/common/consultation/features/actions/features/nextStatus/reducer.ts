import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'

interface Actions extends FetchingActions {
  success(): Action
}

const initialState = createInitialState({})

const { actions, reducer } = createFetchingSymbiote<FetchingState, Actions>(
  initialState,
  state => ({
    ...state,
    fetching: false,
    error: false,
  }),
  'common/consultation/nextStatus',
)

export { FetchingState as State, reducer, Actions, actions }
