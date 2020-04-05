import {State} from '@app/src/lib/store';

export const selectToken = (state: State) => state.login.user.token;
