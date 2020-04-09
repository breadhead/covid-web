import { Action } from 'redux';

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/src/lib/symbioteFactory';

import { ArticlesItem } from '../../../models/common/ArticlesItem';

interface State extends FetchingState {
  item?: ArticlesItem;
}

interface Actions extends FetchingActions {
  success(articles: ArticlesItem): Action;
}

const initialState = createInitialState({
  item: undefined,
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, articlesItem: ArticlesItem) => {
    return {
      ...state,
      item: articlesItem,
    };
  },
  'articlesItem',
);

export { reducer, actions };
export type { State, Actions };
