import {Action} from 'redux';

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/src/lib/symbioteFactory';

export interface SignUpErrorFields {
  password?: boolean;
  confirm?: boolean;
  login?: boolean;
}

export const ACCOUNT_EXISTS_STATUS = 409;

export interface SignUpError {
  fields: SignUpErrorFields;
  message: string;
  code?: number;
}

interface State extends FetchingState {
  token: string;
  signUpError?: SignUpError;
}

interface Actions extends FetchingActions {
  success(token: string): Action;
  signUpError(value?: SignUpError): Action;
}

const initialState = createInitialState({
  token: '',
  signUpError: undefined,
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state, token) => ({
    ...state,
    token,
  }),
  'signUp',
  {
    signUpError: (state, signUpError) => ({
      ...state,
      error: false,
      fetching: false,
      signUpError,
    }),
  },
);

export { reducer, actions };
export type { State, Actions };
