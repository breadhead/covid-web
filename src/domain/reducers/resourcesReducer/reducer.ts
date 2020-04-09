import { Action } from 'redux';

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/src/lib/symbioteFactory';

import { TagType } from '../../models/common/Tag';

interface State extends FetchingState {
  list: TagType[];
}

interface Actions extends FetchingActions {
  success(resources: any): Action;
}

const initialState = createInitialState({
  list: [],
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, resources: TagType[]) => {
    return {
      ...state,
      list: resources,
    };
  },
  'resources',
);

export { reducer, actions };
export type { State, Actions };
