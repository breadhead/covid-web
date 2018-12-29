import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {
  token: string
}

interface Actions {
  set(token: string): Action
}

const initialState: State = {
  token: '',
}

const { actions, reducer } = createSymbiote<State, Actions>(
  initialState,
  {
    set: (state, token: string) => ({
      ...state,
      token,
    }),
  },
  'token',
)

export { State, reducer, Actions, actions }
