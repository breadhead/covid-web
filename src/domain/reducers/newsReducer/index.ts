import { combineReducers } from 'redux';

import * as newsItem from './item';
import * as newsList from './list';

export interface State {
  list: newsList.State;
  item: newsItem.State;
}

export const reducer = combineReducers<State, any>({
  item: newsItem.reducer,
  list: newsList.reducer,
} as any);
