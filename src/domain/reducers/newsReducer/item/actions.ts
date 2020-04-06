import { Dispatch } from 'redux';
import { head } from 'lodash';

import { ExtraArgs, State } from '@app/src/lib/store';

import { newsItemRequestBuilder } from '../helpers/newsItemRequestBuilder';
import { actions } from './reducer';

export const getNewsItemFromSanity = (code: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState);
  try {
    dispatch(actions.request());

    const query = newsItemRequestBuilder(code);
    console.log('query', query);

    const news = await api.getNewsItem(query);
    const newsItem = head(news);

    if (newsItem) {
      return dispatch(actions.success(newsItem));
    }
    throw new Error('not found');
  } catch (error) {
    return dispatch(actions.error(error.message));
  }
};
