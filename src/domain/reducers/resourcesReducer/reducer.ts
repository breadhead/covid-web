import { Action } from 'redux';

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/src/lib/symbioteFactory';

import { ResourcesItem } from '../../models/common/ResourcesItem';

interface State extends FetchingState {
  list: ResourcesItem[];
}

interface Actions extends FetchingActions {
  success(resources: any): Action;
}

const initialState = createInitialState({
  list: [],
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, resources: ResourcesItem[]) => {
    return {
      ...state,
      list: resources,
    };
  },
  'resources',
);

export { reducer, actions };
export type { State, Actions };
