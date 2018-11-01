import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { Action } from 'redux'

interface State extends FetchingState {
  error: boolean | string
  fetching: boolean
  quotaId?: string
}

interface Actions extends FetchingActions {
  request(): Action
  success(quotaId: string): Action
  error(error: string): Action
}

const initialState = createInitialState({
  error: false,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, quotaId: string) => ({
    ...state,
    error: false,
    quotaId,
  }),
  'createQuota',
)

export {
  State, reducer,
  Actions, actions,
}
