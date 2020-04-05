import { Dispatch } from 'redux';

import { ExtraArgs, State } from '@app/src/lib/store';
import { actions as modalActions } from '@app/src/features/common/modal/reducer';
import { updateRequestFormData } from '@app/src/domain/reducers/requestConsultationReducer/actions';
import {
  actions as userActions,
  currentUser,
} from '@app/src/domain/reducers/userReducer';

import { setCookie } from '../../../features/login/features/signIn/helpers/setAuthToken';
import { actions } from './reducer';
import { showIntercom } from '../../../features/landing/features/request-chat/showIntercom';
import { setUserEmailLocalStorage } from './userEmailLocalStorage';

export const loginAction = (username: string, password: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState);
  try {
    dispatch(actions.request());
    const { token } = await api.login(username, password);
    setUserEmailLocalStorage(username);

    setCookie(token);
    dispatch(userActions.setToken(token));
    dispatch(modalActions.close());
    await dispatch(currentUser());
    await dispatch(updateRequestFormData());

    showIntercom();
    return dispatch(actions.success(token));
  } catch (error) {
    const { message, fields, code } = error.response.data;

    dispatch(actions.error(error.message));
    dispatch(actions.signInError({ message, fields, code }));
    throw error;
  }
};
