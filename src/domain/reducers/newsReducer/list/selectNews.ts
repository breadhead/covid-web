import { State } from '@app/src/lib/store';

export const selectNews = (state: State) => state.news.list.list;
