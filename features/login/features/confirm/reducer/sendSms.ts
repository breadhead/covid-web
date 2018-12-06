import { Action } from 'redux'

import { createFetchingSymbiote, createInitialState, FetchingActions, FetchingState } from '@app/lib/symbioteFactory'

interface State extends FetchingState {
  send: boolean
}

interface Actions extends FetchingActions {
  success(): Action
}

const initialState = createInitialState({
  send: false,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state) => ({
    ...state,
    send: true,
  }),
  'login/send-sms',
)

export {
  State, reducer,
  Actions, actions,
}
