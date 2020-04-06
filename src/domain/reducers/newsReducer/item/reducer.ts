import { Action } from 'redux';

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/src/lib/symbioteFactory';

import { NewsItem } from '../../../models/common/NewsItem';

interface State extends FetchingState {
  item?: NewsItem;
}

interface Actions extends FetchingActions {
  success(news: NewsItem): Action;
}

const initialState = createInitialState({
  item: undefined,
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, newsItem: NewsItem) => {
    return {
      ...state,
      item: newsItem,
    };
  },
  'newsItem',
);

export { reducer, actions };
export type { State, Actions };
