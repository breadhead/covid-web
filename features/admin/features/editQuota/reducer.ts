import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'

interface State extends FetchingState {
  quotaId?: string
}

interface Actions extends FetchingActions {
  success(quotaId: string): Action
}

const initialState = createInitialState({
  quotaId: undefined,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, quotaId: string) => ({
    ...state,
    quotaId,
  }),
  'editQuota',
)

export { State, reducer, Actions, actions }
