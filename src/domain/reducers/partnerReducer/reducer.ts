import {Action} from 'redux';

import {Partner} from '@app/src/domain/models/sanity/Partner';
import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/src/lib/symbioteFactory';

interface State extends FetchingState {
  list: Partner[];
}

interface Actions extends FetchingActions {
  success(partners: any): Action;
}

const initialState = createInitialState({
  list: [],
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, partnersFromSanity: Partner[]) => {
    return {
      ...state,
      list: partnersFromSanity,
    };
  },
  'getPartnersFromSanity',
);

export { reducer, actions };
export type { State, Actions };
