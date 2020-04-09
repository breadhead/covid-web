import { combineReducers } from 'redux';

import * as articlesItem from './item';
import * as articlesList from './list';
import * as featuredArticlesList from './featured';

export interface State {
  list: articlesList.State;
  item: articlesItem.State;
  featuredArticles: featuredArticlesList.State;
}

export const reducer = combineReducers<State, any>({
  item: articlesItem.reducer,
  list: articlesList.reducer,
  featuredArticles: featuredArticlesList.reducer,
} as any);
