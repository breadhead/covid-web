import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {
  error: false | string
}

const initialState = {
  error: false,
} as State

interface Actions {
  success(): Action
  error(error: string): Action
}

const { actions, reducer } = createSymbiote<State, Actions>(
  initialState,
  {
    success: (state) => ({
      ...state,
      error: false,
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
