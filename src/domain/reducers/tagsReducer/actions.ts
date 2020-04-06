import { Dispatch } from 'redux';

import { ExtraArgs, State } from '@app/src/lib/store';

import { actions } from './reducer';

export const getTagsFromSanity = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState);
  try {
    dispatch(actions.request());

    const tags = await api.getTags();

    return dispatch(actions.success(tags));
  } catch (error) {
    return dispatch(actions.error(error.message));
  }
};
