import { State } from '@app/src/lib/store';

export const selectFeaturedArticles = (state: State) =>
  state.articles.featuredArticles.list;
