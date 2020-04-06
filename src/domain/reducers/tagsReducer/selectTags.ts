import { State } from '@app/src/lib/store';

export const selectPartners = (state: State) => state.tags.list;
