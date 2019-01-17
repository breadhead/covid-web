import { Role } from '@app/lib/api/ApiClient'
import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {
  token: string
  roles: Role[]
}

interface Actions {
  setToken(token: string): Action
  setUser(roles: Role[]): Action
}

const initialState: State = {
  token: '',
  roles: [],
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
  },
  'user',
)

export { State, reducer, Actions, actions }
