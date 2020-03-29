import { Role } from '@app/models/Users/User'
import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {

  token: string
  login: string
  roles: Role[]
  quotasAvailable: boolean
}

interface Actions {
  setToken(token: string): Action
  setLogin(login: string): Action

  setUser(roles: Role[]): Action
  setQuotasAvailable(available: boolean): Action
}

const initialState: State = {
  token: '',
  login: '',

  roles: [],
  quotasAvailable: false,
}

const { actions, reducer } = createSymbiote<State, Actions>(
  initialState,
  {
    setToken: (state, token: string) => ({
      ...state,
      token,
    }),
    setLogin: (state, login: string) => ({
      ...state,
      login,
    }),

    setUser: (state, roles: Role[]) => ({
      ...state,
      roles,
    }),
    setQuotasAvailable: (state, quotasAvailable: boolean) => ({
      ...state,
      quotasAvailable,
    }),
  },
  'user',
)

export { State, reducer, Actions, actions }
