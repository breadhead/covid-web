import { State } from './node_modules/@app/src/lib/store';

export const getFound = (state: State) => state.notFound.found;
