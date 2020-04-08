import { State } from '@app/src/lib/store';

export const selectFeaturedNews = (state: State) =>
  state.news.featuredNews.list;
