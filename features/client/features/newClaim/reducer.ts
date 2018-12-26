import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'

interface State extends FetchingState {
  createdId?: string
  quotaAllocated: boolean
}

interface Actions extends FetchingActions {
  success(createdId: string, quotaAllocated: boolean): Action
}

const initialState = createInitialState({
  createdId: undefined,
  quotaAllocated: false,
  email: undefined,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, createdId: string, quotaAllocated: boolean) => ({
    ...state,
    quotaAllocated,
    createdId,
  }),
  'client/new-claim',
)

export { State, reducer, Actions, actions }
