import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {
  token: string,
  fetching: boolean,
  error: false | string
  authViolateStatus?: boolean
}

const initialState = {
  token: '',
  fetching: false,
  error: false,
  authViolateStatus: undefined,
} as State

interface Actions {
  request(): Action
  success(token: string): Action
  error(error: string): Action
  authViolateStatus(value: boolean): Action
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
    authViolateStatus: (state, authViolateStatus) => ({
      ...state,
      error: false,
      fetching: false,
      authViolateStatus,
    }),
  },
  'login',
)

export {
  State, reducer,
  Actions, actions,
}
