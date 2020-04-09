import { Dispatch } from 'redux';

import { needToFetch } from '@app/src/helpers/needToFetch';
import { ExtraArgs, State } from '@app/src/lib/store';

import { selectAllTags } from '../../tagsReducer/selectTags';
import { articlesListRequestBuilder } from '../helpers/articlesListRequestBuilder';
import { ArticlesFetchParams } from './config';
import { actions } from './reducer';
import { selectArticlesWithParams } from './selectArticles';

export const getArticlesFromSanity = (params: ArticlesFetchParams) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  if (needToFetch(selectArticlesWithParams(params)(getState()))) {
    const api = getApi(getState);
    try {
      dispatch(actions.request());
      const tags = selectAllTags(getState());
      const query = articlesListRequestBuilder(params, tags);

      const articles = await api.getArticles(query);

      return dispatch(actions.success(articles, params));
    } catch (error) {
      return dispatch(actions.error(error.message));
    }
  }
};
