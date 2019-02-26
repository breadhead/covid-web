import { Role } from '@app/models/Users/User'
import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {
  token: string
  roles: Role[]
  wantTo: string
}

interface Actions {
  setToken(token: string): Action
  setUser(roles: Role[]): Action
  setWantTo(wantTo: string): Action
}

const initialState: State = {
  token: '',
  roles: [],
  wantTo: '',
}

const { actions, reducer } = createSymbiote<State, Actions>(
  initialState,
  {
    setToken: (state, token: string) => ({
      ...state,
      token,
    }),
    setUser: (state, roles: Role[]) => ({
      ...state,
      roles,
    }),
    setWantTo: (state, wantTo: string) => ({
      ...state,
      wantTo,
    }),
  },
  'user',
)

export { State, reducer, Actions, actions }
