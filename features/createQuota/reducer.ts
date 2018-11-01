import {
  createFetchingSymbiote,
  createInitialState,
  errorSymbiote,
  FetchingActions,
  FetchingState,
  requestSymbiote
} from '@app/lib/symbioteFactory'
import { Action } from 'redux'

interface State extends FetchingState {
  error: false | string
  fetching: boolean
  quotaId?: string
}

const initialState = createInitialState({
  error: false,
})

interface Actions extends FetchingActions {
  success(quotaId: string): Action
  error(error: string): Action
  request(): Action
}

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  {
    request: requestSymbiote,
    success: (state, quotaId) => ({
      ...state,
      error: false,
      quotaId,
    }),
    error: errorSymbiote,
  },
  'createQuota',
)

export {
  State, reducer,
  Actions, actions,
}
