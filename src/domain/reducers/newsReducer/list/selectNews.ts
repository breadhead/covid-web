import { State } from '@app/src/lib/store';

import { getPageKeyFromQuery, getPageKeyFromParams } from './query';
import { NewsFetchParams } from './config';

export const selectNews = (query: any) => (state: State) => {
  const key = getPageKeyFromQuery(query);

  return state.news.list.list.pages[key] || [];
};

export const selectNewsWithParams = (params: NewsFetchParams) => (
  state: State,
) => {
  const key = getPageKeyFromParams(params);
  return state.news.list.list.pages[key] || [];
};
