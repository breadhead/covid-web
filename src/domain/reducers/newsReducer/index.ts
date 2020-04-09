import { combineReducers } from 'redux';

import * as newsItem from './item';
import * as newsList from './list';
import * as featuredNewsList from './featured';
import * as mainPageList from './mainPageList';

export interface State {
  list: newsList.State;
  item: newsItem.State;
  featuredNews: featuredNewsList.State;
  mainPageList: mainPageList.State;
}

export const reducer = combineReducers<State, any>({
  item: newsItem.reducer,
  list: newsList.reducer,
  featuredNews: featuredNewsList.reducer,
  mainPageList: mainPageList.reducer,
} as any);
