import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { Quota } from '@app/models/Quota/Quota'
import { Action } from 'redux'

interface State extends FetchingState {
  result: { source: Quota; target: Quota } | null
}

const initialState = createInitialState({
  result: null,
})

interface Actions extends FetchingActions {
  success(result: { source: Quota; target: Quota }): Action
}

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state, result) => ({
    ...state,
    fetching: false,
    error: false,
    result,
  }),
  'transfer',
)

export { State, reducer, Actions, actions }
