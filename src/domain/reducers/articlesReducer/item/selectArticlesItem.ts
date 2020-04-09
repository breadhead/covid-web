import { State } from '@app/src/lib/store';

export const selectArticlesItem = (state: State) => state.articles.item.item;
