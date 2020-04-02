import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { Action } from 'redux'

interface State extends FetchingState {
  token: string
  authViolateStatus?: boolean
}

interface Actions extends FetchingActions {
  success(token: string): Action
  authViolateStatus(value: boolean): Action
}

const initialState = createInitialState({
  token: '',
  authViolateStatus: undefined,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state, token) => ({
    ...state,
    token,
  }),
  'restore-password',
  {
    authViolateStatus: (state, authViolateStatus) => ({
      ...state,
      error: false,
      fetching: false,
      authViolateStatus,
    }),
  },
)

export { reducer, actions }
export type { State, Actions }

