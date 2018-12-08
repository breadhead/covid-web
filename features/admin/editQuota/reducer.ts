import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { Action } from 'redux'

interface State extends FetchingState {
  quotaId?: string
}

interface Actions extends FetchingActions {
  success(quotaId: string): Action
}

const initialState = createInitialState({
  error: false,
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
