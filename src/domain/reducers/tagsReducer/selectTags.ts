import { State } from '@app/src/lib/store';

export const selectTags = (state: State) => state.tags.list;
