import { Action } from 'redux';

import { Partner } from '@app/src/domain/models/common/Partner';
import { PageType } from '@app/src/features/landing/features/partners/organisms/PartnersList/config';
import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/src/lib/symbioteFactory';

import { Tag } from '../../models/common/Tag';

interface State extends FetchingState {
  list: Tag[];
}

interface Actions extends FetchingActions {
  success(tags: any): Action;
}

const initialState = createInitialState({
  list: [],
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, tags: Tag[]) => {
    return {
      ...state,
      list: tags,
    };
  },
  'tags',
);

export { reducer, actions };
export type { State, Actions };
