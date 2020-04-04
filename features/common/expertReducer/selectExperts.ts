import { State } from './node_modules/@app/src/lib/store';

export const selectExperts = (state: State) => state.experts.list;
