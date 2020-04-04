import { State } from '@app/lib/store';

export const selectExperts = (state: State) => state.experts.list;
