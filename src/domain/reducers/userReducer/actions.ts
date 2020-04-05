import { Dispatch } from 'redux';

import { actions } from '@app/src/domain/reducers/signInReducer/reducer';
import { ExtraArgs, State } from '@app/src/lib/store';

import { actions as userActions } from './index';

export const currentUser = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState);
  try {
    dispatch(actions.request());
    const user = await api.currentUser();
    dispatch(userActions.setUser(user.roles));
    dispatch(userActions.setLogin(user.login));

    return user;
  } catch (error) {
    dispatch(actions.error(error.message));
    throw error;
  }
};
