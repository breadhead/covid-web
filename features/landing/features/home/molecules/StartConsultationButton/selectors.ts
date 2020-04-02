import { State } from '@app/lib/store';

export const selectToken = (state: State) => state.login.user.token;
