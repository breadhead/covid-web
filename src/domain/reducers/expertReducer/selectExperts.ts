import {State} from '@app/src/lib/store';

export const selectExperts = (state: State) => state.experts.list;
