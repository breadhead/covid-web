import { Action } from 'redux';

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/src/lib/symbioteFactory';

import { ArticlesItem } from '../../../models/common/ArticlesItem';
import { ArticlesFetchParams } from './config';
import { getQueryKey, getPageKeyFromParams } from './query';

interface State extends FetchingState {
  list: {
    key?: string;
    pages: { [pageKey: string]: ArticlesItem[] | undefined };
  };
}

interface Actions extends FetchingActions {
  success(articles: ArticlesItem[], queryParams: ArticlesFetchParams): Action;
}

const initialState = createInitialState({
  list: { key: undefined, pages: {} },
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, articles: ArticlesItem[], params: ArticlesFetchParams) => {
    const key = getQueryKey(params);
    const shouldReplace = state.list.key !== key;
    const pageKey = getPageKeyFromParams(params);

    if (shouldReplace) {
      return { ...state, list: { key, pages: { [pageKey]: articles } } };
    }

    return {
      ...state,
      list: {
        key,
        pages: { ...(state.list.pages || {}), [pageKey]: articles },
      },
    };
  },
  'articles',
);

export { reducer, actions };
export type { State, Actions };
