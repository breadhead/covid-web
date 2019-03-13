import { Role } from '@app/models/Users/User'
import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {
  token: string
  roles: Role[]
  quotasAvailable: boolean
}

interface Actions {
  setToken(token: string): Action
  setUser(roles: Role[]): Action
  setQuotasAvailable(available: boolean): Action
}

const initialState: State = {
  token: '',
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
