import { errorSymbiote, requestSymbiote } from '@app/lib/symbioteFactory'
import { Quota } from '@app/models/Quota/Quota'
import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {
  quota: Quota | null
  fetching: boolean
  error: false | string
}

const initialState = {
  quota: null,
  fetching: false,
  error: false,
} as State

interface Actions {
  request(): Action
  success(quota: Quota): Action
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
