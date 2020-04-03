import { Action } from 'redux';

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory';

export interface State extends FetchingState {
  formData?: any;
}

export interface Actions extends FetchingActions {
  success(requestFormData: string): Action;
}

const initialState = createInitialState({
  formData: undefined,
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, formData: string) => {
    return {
      ...state,
      formData,
    };
  },
  'saveFormToAirtable',
);

export { reducer, actions };
