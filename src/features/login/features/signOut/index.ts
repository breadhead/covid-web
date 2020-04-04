import Router from 'next/router';
import { Dispatch } from 'redux';

import { setFormRequestFinished } from '@app/src/features/landing/features/request/organisms/RequestForm/localStorage';
import { setCookie } from '@app/src/features/login/features/signIn/helpers/setAuthToken';
import { actions as userActions } from '@app/src/features/login/features/user';

import {
  resetUserEmailLocalStorage,
  getUserEmailLocalStorage,
} from '../signIn/userEmailLocalStorage';

export default () => (dispatch: Dispatch<any>) => {
  setCookie('');

  Router.push('/');

  setFormRequestFinished(false);

  resetUserEmailLocalStorage();
  console.log(getUserEmailLocalStorage());

  if ((window as any).Intercom) {
    (window as any).Intercom('shutdown');
  }

  return dispatch(userActions.setToken(''));
};
