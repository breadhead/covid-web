import { Action } from 'redux';

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/src/lib/symbioteFactory';

import { Hospital } from '../../models/common/Hospital';

interface State extends FetchingState {
  list: Hospital[];
}

interface Actions extends FetchingActions {
  success(partners: Hospital[]): Action;
}

const initialState = createInitialState({
  list: [],
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, partnersFromSanity: Hospital[]) => {
    return {
      ...state,
      list: partnersFromSanity,
    };
  },
  'hospitals',
);

export { reducer, actions };
export type { State, Actions };
