import { Action } from 'redux';

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/src/lib/symbioteFactory';

export interface SignInErrorFields {
  password?: boolean;
  confirm?: boolean;
  login?: boolean;
}

export interface SignInError {
  fields: SignInErrorFields;
  message: string;
  code?: number;
}

interface State extends FetchingState {
  token: string;
  authViolateStatus?: boolean;
  signInError?: SignInError;
}

interface Actions extends FetchingActions {
  success(token: string): Action;
  authViolateStatus(value: boolean): Action;
  signInError(value?: SignInError): Action;
}

const initialState = createInitialState({
  token: '',
  authViolateStatus: undefined,
  signInError: undefined,
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state, token) => ({
    ...state,
    token,
  }),
  'signIn',
  {
    authViolateStatus: (state, authViolateStatus) => ({
      ...state,
      error: false,
      fetching: false,
      authViolateStatus,
    }),
    signInError: (state, signInError) => ({
      ...state,
      error: false,
      fetching: false,
      signInError,
    }),
  },
);

export { reducer, actions };
export type { State, Actions };
