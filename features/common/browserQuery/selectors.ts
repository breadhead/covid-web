import { State } from './node_modules/@app/src/lib/store';

export const getQuery = <Q extends object>(state: State) =>
  state.browserQuery as Q;
