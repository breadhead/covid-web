import { Dispatch } from 'redux';

import { ExtraArgs, State } from '@app/lib/store';

import { actions } from './reducer';

export const getPartnersFromSanity = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState);
  try {
    dispatch(actions.request());

    const partners = await api
      .getPartners()
      .then((res) => res.sort((a, b) => (a.sortIndex < b.sortIndex ? -1 : 1)));

    return dispatch(actions.success(partners));
  } catch (error) {
    return dispatch(actions.error(error.message));
  }
};
