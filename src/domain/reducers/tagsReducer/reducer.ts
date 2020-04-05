import { Action } from 'redux';

import { Partner } from '@app/src/domain/models/common/Partner';
import { PageType } from '@app/src/features/landing/features/partners/organisms/PartnersList/config';
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
  success(tags: any): Action;
}

const initialState = createInitialState({
  list: [],
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, tags: TagType[]) => {
    return {
      ...state,
      list: tags,
    };
  },
  'tags',
);

export { reducer, actions };
export type { State, Actions };
