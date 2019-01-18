import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

export interface State {
  found: boolean
}

const initial = {
  found: true,
}

interface Actions {
  set: (found: boolean) => Action
}

export const { actions, reducer } = createSymbiote<State, Actions>(
  initial,
  {
    set: (state: State, found: boolean) => ({
      ...state,
      found,
    }),
  },
  'not-found-state',
)
