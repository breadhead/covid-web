import { combineReducers } from 'redux';

import * as newsItem from './item';
import * as newsList from './list';
import * as featuredNewsList from './featured';

export interface State {
  list: newsList.State;
  item: newsItem.State;
  featuredNews: featuredNewsList.State;
}

export const reducer = combineReducers<State, any>({
  item: newsItem.reducer,
  list: newsList.reducer,
  featuredNews: featuredNewsList.reducer,
} as any);
