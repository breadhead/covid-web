import { Action } from 'redux';

import { Expert } from '@app/src/domain/models/sanity/Expert';
import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/src/lib/symbioteFactory';

interface State extends FetchingState {
  list: Expert[];
}

interface Actions extends FetchingActions {
  success(experts: any): Action;
}

const initialState = createInitialState({
  list: [],
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, expertsFromSanity: Expert[]) => {
    return {
      ...state,
      list: expertsFromSanity,
    };
  },
  'getExpertBoardFromSanity',
);

export { reducer, actions };
export type { State, Actions };
