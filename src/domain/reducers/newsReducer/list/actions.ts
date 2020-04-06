import { Dispatch } from 'redux';

import { ExtraArgs, State } from '@app/src/lib/store';

import { actions } from './reducer';
import { newsListRequestBuilder } from '../helpers/newsListRequestBuilder';
import { ALL_CATEGORIES } from '../../../models/common/NewsCategoryType';

export const getNewsFromSanity = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState);
  try {
    dispatch(actions.request());
    // TODO: pass query from above
    const query = newsListRequestBuilder(ALL_CATEGORIES, []);

    const news = await api.getNews(query);

    return dispatch(actions.success(news));
  } catch (error) {
    return dispatch(actions.error(error.message));
  }
};
