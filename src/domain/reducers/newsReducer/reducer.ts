import { Action } from 'redux';

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/src/lib/symbioteFactory';

import { NewsItem } from '../../models/common/NewsItem';

interface State extends FetchingState {
  list: NewsItem[];
}

interface Actions extends FetchingActions {
  success(news: NewsItem[]): Action;
}

const initialState = createInitialState({
  list: [],
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, news: NewsItem[]) => {
    return {
      ...state,
      list: news,
    };
  },
  'news',
);

export { reducer, actions };
export type { State, Actions };
