import { Dispatch } from 'redux';

import { ExtraArgs, State } from '@app/src/lib/store';

import { actions } from './reducer';

export const getResourcesFromSanity = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  console.log('getResourcesFromSanity');
  const api = getApi(getState);
  try {
    dispatch(actions.request());

    const resources = await api.getResources();
    return dispatch(actions.success(resources));
  } catch (error) {
    return dispatch(actions.error(error.message));
  }
};
