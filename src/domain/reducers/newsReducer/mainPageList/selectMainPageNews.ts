import { State } from '@app/src/lib/store';

export const selectMainPageNews = (state: State) =>
  state.news.featuredNews.list;
