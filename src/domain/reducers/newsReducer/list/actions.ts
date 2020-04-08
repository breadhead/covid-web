import { Dispatch } from 'redux';

import { ExtraArgs, State } from '@app/src/lib/store';
import { needToFetch } from '@app/src/helpers/needToFetch';

import { actions } from './reducer';
import { newsListRequestBuilder } from '../helpers/newsListRequestBuilder';
import { ALL_CATEGORIES } from '../../../models/common/NewsCategoryType';
import { selectNews } from './selectNews';

export const getNewsFromSanity = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  if (needToFetch(selectNews(getState()))) {
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
  }
};
