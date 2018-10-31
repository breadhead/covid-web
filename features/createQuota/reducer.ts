import { errorSymbiote, requestSymbiote } from '@app/lib/symbioteFactory'
import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {
  error: false | string
  fetching: boolean
  quotaId?: string
}

const initialState = {
  error: false,
} as State

interface Actions {
  success(quotaId: string): Action
  error(error: string): Action
  request(): Action
}

const { actions, reducer } = createSymbiote<State, Actions>(
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
