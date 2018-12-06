import { Action } from 'redux'

import { createFetchingSymbiote, createInitialState, FetchingActions, FetchingState } from '@app/lib/symbioteFactory'

interface State extends FetchingState {
  send: boolean
}

interface Actions extends FetchingActions {
  success(result: boolean): Action
}

const initialState = createInitialState({
  send: false,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state, result) => ({
    ...state,
    send: result,
  }),
  'modal',
)

export {
  State, reducer,
  Actions, actions,
}
