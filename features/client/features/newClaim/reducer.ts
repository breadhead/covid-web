import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'

interface State extends FetchingState {
  createdId?: string
}

interface Actions extends FetchingActions {
  success(createdId: string): Action
}

const initialState = createInitialState({
  createdId: undefined,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, createdId: string) => ({
    ...state,
    createdId,
  }),
  'client/new-claim',
)

export { State, reducer, Actions, actions }
