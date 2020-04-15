import { Dispatch } from 'redux';
import { head } from 'lodash';

import { ExtraArgs, State } from '@app/src/lib/store';
import { needToFetch } from '@app/src/helpers/needToFetch';

import { articlesItemRequestBuilder } from '../helpers/articlesItemRequestBuilder';
import { actions } from './reducer';
import { selectArticlesItem } from './selectArticlesItem';

export const getArticlesItemFromSanity = (code: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const item = selectArticlesItem(getState());
  if (needToFetch(item) || item?.code.current !== code) {
    const api = getApi(getState);
    try {
      dispatch(actions.request());

      const query = articlesItemRequestBuilder(code);

      const articles = await api.getArticlesItem(query);
      const articlesItem = head(articles);

      if (articlesItem) {
        return dispatch(actions.success(articlesItem));
      }
      throw new Error('not found');
    } catch (error) {
      return dispatch(actions.error(error.message));
    }
  }
};
