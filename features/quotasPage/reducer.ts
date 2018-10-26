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
    request: (state) => ({
      ...state,
      fetching: true,
    }),
    success: (state, data) => ({
      ...state,
      fetching: false,
      error: false,
      data,
    }),
    error: (state, error) => ({
      ...state,
      fetching: false,
      error,
    }),
  },
  'quotas',
)

export {
  State, reducer,
  Actions, actions,
}
