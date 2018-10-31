import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {
  error: false | string
  quotaId?: string
}

const initialState = {
  error: false,
} as State

interface Actions {
  success(quotaId: string): Action
  error(error: string): Action
}

const { actions, reducer } = createSymbiote<State, Actions>(
  initialState,
  {
    success: (state, quotaId) => ({
      ...state,
      error: false,
      quotaId,
    }),
    error: (state, error) => ({
      ...state,
      error,
    }),
  },
  'createQuota',
)

export {
  State, reducer,
  Actions, actions,
}
