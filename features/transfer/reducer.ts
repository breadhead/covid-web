import { Quota } from '@app/models/Quota'
import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {
  result: { source: Quota, target: Quota } | null,
  fetching: boolean,
  error: false | string
}

const initialState = {
  result: null,
  fetching: false,
  error: false,
} as State

interface Actions {
  request(): Action
  success(result: { source: Quota, target: Quota }): Action
  error(error: string): Action
}

const { actions, reducer } = createSymbiote<State, Actions>(
  initialState,
  {
    request: (state) => ({
      ...state,
      fetching: true,
    }),
    success: (state, result) => ({
      ...state,
      fetching: false,
      error: false,
      result,
    }),
    error: (state, error) => ({
      ...state,
      fetching: false,
      error,
    }),
  },
  'transfer',
)

export {
  State, reducer,
  Actions, actions,
}
