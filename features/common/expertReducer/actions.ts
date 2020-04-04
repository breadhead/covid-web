import { Dispatch } from 'redux';

import { ExtraArgs, State } from '@app/lib/store';

import { actions } from './reducer';

export const getExpertsFromSanity = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState);
  try {
    const experts = await api.getExperts();

    return dispatch(actions.success(experts));
  } catch (error) {
    return dispatch(actions.error(error.message));
  }
};
