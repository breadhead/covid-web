export { reducer } from './reducer';
export type { State } from './reducer';
export { getQuery } from './selectors';

import { actions } from './reducer';

const { set } = actions;

export { set };
