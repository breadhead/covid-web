import {Dispatch} from 'redux';

import {ExtraArgs, State} from '@app/src/lib/store';

import {actions} from './reducer';

export const getExpertsFromSanity = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState);

  try {
    const experts = await api
      .getExperts()
      .then((res) => res.sort((a, b) => (a.sortIndex < b.sortIndex ? -1 : 1)));

    return dispatch(actions.success(experts));
  } catch (error) {
    return dispatch(actions.error(error.message));
  }
};
