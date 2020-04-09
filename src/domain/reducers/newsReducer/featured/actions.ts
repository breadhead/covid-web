import { Dispatch } from 'redux';

import { ExtraArgs, State } from '@app/src/lib/store';
import { needToFetch } from '@app/src/helpers/needToFetch';

import { featuredNewsQueryBuilder } from '../helpers/featuredNewsQueryBuilder';
import { actions } from './reducer';
import { selectFeaturedNews } from './selectFeaturedNews';

export const getFeaturedNewsFromSanity = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  if (needToFetch(selectFeaturedNews(getState()))) {
    const api = getApi(getState);
    try {
      dispatch(actions.request());

      const query = featuredNewsQueryBuilder();

      const news = await api.getNews(query);

      return dispatch(actions.success(news));
    } catch (error) {
      return dispatch(actions.error(error.message));
    }
  }
};
