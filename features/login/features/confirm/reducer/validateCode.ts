import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'

interface State extends FetchingState {
  valid: boolean
}

interface Actions extends FetchingActions {
  success(result: boolean): Action
}

const initialState = createInitialState({
  valid: false,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state, result) => ({
    ...state,
    valid: result,
  }),
  'login/validate-code',
)

export { State, reducer, Actions, actions }
