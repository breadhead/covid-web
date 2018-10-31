import { errorSymbiote, requestSymbiote } from '@app/lib/symbioteFactory'
import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {
  quota: any,
  fetching: boolean,
  error: false | string
}

const initialState = {
  quota: {},
  fetching: false,
  error: false,
} as State

interface Actions {
  request(): Action
  success(token: string): Action
  error(error: string): Action
}

const { actions, reducer } = createSymbiote<State, Actions>(
  initialState,
  {
    request: requestSymbiote,
    success: (state, quota) => ({
      ...state,
      fetching: false,
      error: false,
      quota,
    }),
    error: errorSymbiote,
  },
  'quota',
)

export {
  State, reducer,
  Actions, actions,
}
