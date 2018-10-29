import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {
  token: string,
  fetching: boolean,
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
    success: (state, token) => ({
      ...state,
      fetching: false,
      error: false,
      token,
    }),
    error: (state, error) => ({
      ...state,
      fetching: false,
      error,
    }),
  },
  'createQuota',
)

export {
  State, reducer,
  Actions, actions,
}
