import { State } from '@app/src/lib/store';

import { getPageKeyFromQuery, getPageKeyFromParams } from './query';
import { ArticlesFetchParams } from './config';

export const selectArticles = (query: any) => (state: State) => {
  const key = getPageKeyFromQuery(query);

  return state.articles.list.list.pages[key] || [];
};

export const selectArticlesWithParams = (params: ArticlesFetchParams) => (
  state: State,
) => {
  const key = getPageKeyFromParams(params);
  return state.articles.list.list.pages[key] || [];
};
