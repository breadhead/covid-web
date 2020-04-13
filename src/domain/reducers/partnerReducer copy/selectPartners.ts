import { State } from './node_modules/@app/src/lib/store';

export const selectPartners = (state: State) => state.partners.list;
