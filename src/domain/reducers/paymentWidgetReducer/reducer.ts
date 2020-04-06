import { Action } from 'redux';

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/src/lib/symbioteFactory';

interface State extends FetchingState {
  data: any;
}

interface Actions extends FetchingActions {
  success(data: any): Action;
}

const initialState = createInitialState({
  data: null,
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, data: any) => {
    return {
      ...state,
      data,
    };
  },
  'widgetReducer',
);

export { reducer, actions };
export type { State, Actions };
