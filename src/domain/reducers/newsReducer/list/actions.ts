import { Dispatch } from 'redux';

import { ExtraArgs, State } from '@app/src/lib/store';
import { needToFetch } from '@app/src/helpers/needToFetch';

import { actions } from './reducer';
import { newsListRequestBuilder } from '../helpers/newsListRequestBuilder';
import { ALL_CATEGORIES } from '../../../models/common/NewsCategoryType';
import { selectNews } from './selectNews';
import { NewsFetchParams } from './config';
import { selectTags } from '../../tagsReducer/selectTags';

export const getNewsFromSanity = (params: NewsFetchParams) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  // if (needToFetch(selectNews(getState()))) {
  const api = getApi(getState);
  try {
    dispatch(actions.request());
    const tags = selectTags(getState());
    const query = newsListRequestBuilder(params, tags);
    console.log('query', query);

    const news = await api.getNews(query);

    return dispatch(actions.success(news, params));
  } catch (error) {
    return dispatch(actions.error(error.message));
  }
  // }
};
