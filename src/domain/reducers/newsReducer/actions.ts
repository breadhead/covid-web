import { Dispatch } from 'redux';

import { ExtraArgs, State } from '@app/src/lib/store';

import { actions } from './reducer';
import { newsRequestBuilder } from './helpers/newsRequestBuilder';

export const getNewsFromSanity = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState);
  try {
    dispatch(actions.request());
    // TODO: pass query from above
    const query = newsRequestBuilder('', []);
    const tags = await api.getNews(query);
    console.log('tags', tags);

    return dispatch(actions.success(tags));
  } catch (error) {
    return dispatch(actions.error(error.message));
  }
};
