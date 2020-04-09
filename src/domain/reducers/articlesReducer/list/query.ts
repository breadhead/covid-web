import { ALL_CATEGORIES } from '@app/src/domain/models/common/ArticlesCategoryType';

import { ArticlesQuery, ArticlesFetchParams } from './config';

export const getParamsFromQuery = ({
  page = '1',
  category = ALL_CATEGORIES,
  tags = '',
}: ArticlesQuery): ArticlesFetchParams => {
  const tagsList = tags.split(',').filter((it) => !!it);

  return {
    page: Number(page),
    category,
    tags: tagsList,
  };
};

export const getQueryKey = (params: ArticlesFetchParams) => {
  return params.category + (params.tags || []).join('-');
};

export const getPageKeyFromQuery = (query: any) => {
  return getPageKeyFromParams(getParamsFromQuery(query));
};

export const getPageKeyFromParams = (params: ArticlesFetchParams) => {
  return getQueryKey(params) + '-page-' + params.page;
};
