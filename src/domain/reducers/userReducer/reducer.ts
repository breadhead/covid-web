import {Action} from 'redux';
import {createSymbiote} from 'redux-symbiote';

import {Role} from '@app/src/domain/models/Users/User';

interface State {
  token: string;
  login: string;
  roles: Role[];
  quotasAvailable: boolean;
}

interface Actions {
  setToken(token: string): Action;
  setLogin(login: string): Action;

  setUser(roles: Role[]): Action;
  setQuotasAvailable(available: boolean): Action;
}

const initialState: State = {
  token: '',
  login: '',

  roles: [],
  quotasAvailable: false,
};

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
);

export { reducer, actions };
export type { State, Actions };
