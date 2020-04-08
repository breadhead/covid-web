import { State } from '@app/src/lib/store';

import { getPageKeyFromQuery } from './query';

export const selectNews = (query: any) => (state: State) => {
  const key = getPageKeyFromQuery(query);

  return state.news.list.list.pages[key] || [];
};
