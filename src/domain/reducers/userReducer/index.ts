import {actions, reducer} from './reducer';

export { reducer, actions };
export type { State, Actions } from './reducer';
export { getToken, getRoles } from './selectors';
export { currentUser } from './actions';
export const { setToken } = actions;
