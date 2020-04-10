import { ALL_CATEGORIES } from '@app/src/domain/models/common/NewsCategoryType';

import { NewsQuery, NewsFetchParams } from './config';

export const getParamsFromQuery = ({
  page = '1',
  category = ALL_CATEGORIES,
  tags = '',
}: NewsQuery): NewsFetchParams => {
  const tagsList = tags.split(',').filter((it) => !!it);

  return {
    page: Number(page),
    category,
    tags: tagsList,
  };
};

export const getQueryKey = (params: NewsFetchParams) => {
  return params.category + (params.tags || []).join('-');
};

export const getPageKeyFromQuery = (query: any) => {
  console.log('query: 2222', query);
  return getPageKeyFromParams(getParamsFromQuery(query));
};

export const getPageKeyFromParams = (params: NewsFetchParams) => {
  return getQueryKey(params) + '-page-' + params.page;
};
