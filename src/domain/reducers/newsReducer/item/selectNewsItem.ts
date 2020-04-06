import { State } from '@app/src/lib/store';

export const selectNewsItem = (state: State) => state.news.item.item;
