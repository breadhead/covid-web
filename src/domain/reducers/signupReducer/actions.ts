import {Dispatch} from 'redux';

import {actions as modalActions} from '@app/src/features/common/modal';
import {setCookie} from '@app/src/features/login/features/signIn/helpers/setAuthToken';
import {actions as userActions, currentUser,} from '@app/src/domain/reducers/userReducer';
import {ExtraArgs, State} from '@app/src/lib/store';
import {updateRequestFormData} from '@app/src/domain/reducers/requestConsultationReducer/actions';

import {actions} from './reducer';
import {showIntercom} from '../../../features/landing/features/request-chat/showIntercom';
import {getUserEmailLocalStorage, setUserEmailLocalStorage,} from '../signInReducer/userEmailLocalStorage';

export const signUp = (
  login: string,
  password: string,
  confirm: string,
) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState);
  try {
    const { token } = await api.signUp(login, password, confirm);

    setCookie(token);
    dispatch(userActions.setToken(token));
    dispatch(modalActions.close());

    setUserEmailLocalStorage(login);

    console.log(getUserEmailLocalStorage());

    await dispatch(currentUser());
    await dispatch(updateRequestFormData());

    showIntercom();

    return dispatch(actions.success(token));
  } catch (error) {
    const { message, fields, code } = error.response.data;

    dispatch(actions.error(error.message));
    dispatch(actions.signUpError({ message, fields, code }));
    throw error;
  }
};
