import { Action } from 'redux';

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/src/lib/symbioteFactory';

import { ArticlesItem } from '../../../models/common/ArticlesItem';

interface State extends FetchingState {
  list: ArticlesItem[];
}

interface Actions extends FetchingActions {
  success(articles: ArticlesItem[]): Action;
}

const initialState = createInitialState({
  list: [],
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, articles: ArticlesItem[]) => {
    return {
      ...state,
      list: articles,
    };
  },
  'featured-articles',
);

export { reducer, actions };
export type { State, Actions };
