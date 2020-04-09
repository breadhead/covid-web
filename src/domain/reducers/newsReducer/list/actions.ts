import { Dispatch } from 'redux';

import { needToFetch } from '@app/src/helpers/needToFetch';
import { ExtraArgs, State } from '@app/src/lib/store';

import { selectTags } from '../../tagsReducer/selectTags';
import { newsListRequestBuilder } from '../helpers/newsListRequestBuilder';
import { NewsFetchParams } from './config';
import { actions } from './reducer';
import { selectNewsWithParams } from './selectNews';

export const getNewsFromSanity = (params: NewsFetchParams) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  if (needToFetch(selectNewsWithParams(params)(getState()))) {
    const api = getApi(getState);
    try {
      dispatch(actions.request());
      const tags = selectTags(getState());
      const query = newsListRequestBuilder(params, tags);

      const news = await api.getNews(query);

      return dispatch(actions.success(news, params));
    } catch (error) {
      return dispatch(actions.error(error.message));
    }
  }
};
