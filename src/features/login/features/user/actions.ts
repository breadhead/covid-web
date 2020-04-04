import { Dispatch } from 'redux';

import { actions } from '@app/src/features/login/features/signIn/reducer';
import { actions as userActions } from '@app/src/features/login/features/user';
import { ExtraArgs, State } from '@app/src/lib/store';

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
