import { State } from './node_modules/@app/src/lib/store';

export const selectToken = (state: State) => state.login.user.token;
