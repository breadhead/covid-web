import { Dispatch } from 'redux';

import { ExtraArgs, State } from '@app/src/lib/store';
import { needToFetch } from '@app/src/helpers/needToFetch';

import { actions } from './reducer';
import { selectFeaturedArticles } from './selectFeaturedArticles';

export const getFeaturedArticlesFromSanity = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  if (needToFetch(selectFeaturedArticles(getState()))) {
    const api = getApi(getState);
    try {
      dispatch(actions.request());

      // const query = featuredArticlesQueryBuilder();
      const query = `*[_type == 'article' &&  !(_id in path("drafts.**"))]`;

      const articles = await api.getArticles(query);

      return dispatch(actions.success(articles));
    } catch (error) {
      return dispatch(actions.error(error.message));
    }
  }
};
