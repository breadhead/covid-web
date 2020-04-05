import {State} from '@app/src/lib/store';

export const getToken = (state: State) => state.login.user.token;
export const getUserLogin = (state: State) => state.login.user.login;

export const getRoles = (state: State) => state.login.user.roles;

export const getQuotasAvailable = (state: State) =>
  state.login.user.quotasAvailable;
