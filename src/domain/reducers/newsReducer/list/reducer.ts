import { Action } from 'redux';

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/src/lib/symbioteFactory';

import { NewsItem } from '../../../models/common/NewsItem';
import { NewsFetchParams } from './config';
import { getQueryKey, getPageKeyFromParams } from './query';

interface State extends FetchingState {
  list: { key?: string; pages: { [pageKey: string]: NewsItem[] | undefined } };
}

interface Actions extends FetchingActions {
  success(news: NewsItem[], queryParams: NewsFetchParams): Action;
}

const initialState = createInitialState({
  list: { key: undefined, pages: {} },
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, news: NewsItem[], params: NewsFetchParams) => {
    const key = getQueryKey(params);
    const shouldReplace = state.list.key !== key;
    const pageKey = getPageKeyFromParams(params);

    if (shouldReplace) {
      return { ...state, list: { key, pages: { [pageKey]: news } } };
    }

    return {
      ...state,
      list: {
        key,
        pages: { ...(state.list.pages || {}), [pageKey]: news },
      },
    };
  },
  'news',
);

export { reducer, actions };
export type { State, Actions };
