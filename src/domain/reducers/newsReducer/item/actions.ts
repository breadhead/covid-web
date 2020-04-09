import { Dispatch } from 'redux';
import { head } from 'lodash';

import { ExtraArgs, State } from '@app/src/lib/store';
import { needToFetch } from '@app/src/helpers/needToFetch';

import { newsItemRequestBuilder } from '../helpers/newsItemRequestBuilder';
import { actions } from './reducer';
import { selectNewsItem } from './selectNewsItem';

export const getNewsItemFromSanity = (code: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const item = selectNewsItem(getState());
  if (needToFetch(item) && item?.code.current !== code) {
    const api = getApi(getState);
    try {
      dispatch(actions.request());

      const query = newsItemRequestBuilder(code);

      const news = await api.getNewsItem(query);
      const newsItem = head(news);

      if (newsItem) {
        return dispatch(actions.success(newsItem));
      }
    } catch (error) {
      return dispatch(actions.error(error.message));
    }
  }
};
