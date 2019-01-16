import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {
  token: string
  roles: string[]
}

interface Actions {
  set(token: string, roles: string[]): Action
}

const initialState: State = {
  token: '',
  roles: [],
}

const { actions, reducer } = createSymbiote<State, Actions>(
  initialState,
  {
    set: (state, token: string, roles: string[]) => ({
      ...state,
      token,
      roles,
    }),
  },
  'token',
)

export { State, reducer, Actions, actions }
