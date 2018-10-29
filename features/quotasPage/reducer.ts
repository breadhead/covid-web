import { errorSymbiote, requestSymbiote } from '@app/lib/symbioteFactory'
import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {
  data: any[],
  fetching: boolean,
  error: false | string
}

const initialState = {
  data: [],
  fetching: false,
  error: false,
} as State

interface Actions {
  request(): Action
  success(data: any[]): Action
  error(error: string): Action
}

const { actions, reducer } = createSymbiote<State, Actions>(
  initialState,
  {
    request: requestSymbiote,
    success: (state, data) => ({
      ...state,
      fetching: false,
      error: false,
      data,
    }),
    error: errorSymbiote,
  },
  'quotas',
)

export {
  State, reducer,
  Actions, actions,
}
