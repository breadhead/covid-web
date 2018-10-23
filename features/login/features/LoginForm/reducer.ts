import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {
  token: string,
  fetching: boolean,
  error: false | string
}

const initialState = {
  token: '',
  fetching: false,
  error: false,
} as State

interface Actions {
  request(state: State): Action
  success(state: State, token: string): Action
  error(state: State, error: string): Action
}

const { actions, reducer } = createSymbiote<State, Actions>(
  initialState,
  {
    request: (state) => ({
      ...state,
      fetching: true,
    }),
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
  'login',
)

export {
  State, reducer,
  Actions, actions,
}
