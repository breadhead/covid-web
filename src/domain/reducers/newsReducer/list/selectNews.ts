import { State } from '@app/src/lib/store';

import { getPageKey } from './query';

export const selectNews = (state: State) => (query: any) => {
  const key = getPageKey(query);

  return state.news.list.list.pages[key] || [];
};
