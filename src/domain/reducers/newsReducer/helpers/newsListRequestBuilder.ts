import { isEmpty } from 'lodash';

import {
  NewsCategoryQueryType,
  ALL_CATEGORIES,
} from '@app/src/domain/models/common/NewsCategoryType';

import { PER_PAGE_NEWS, NewsFetchParams } from '../list/config';

export const newsListRequestBuilder = (params: NewsFetchParams) => {
  return `*[_type == 'news' &&  !(_id in path("drafts.**")) ${renderTags(
    params.tags,
  )} ${renderCategories(
    params.category,
  )}]  | order(_updatedAt desc) ${renderAmount(
    params.page,
  )} {..., 'tags': tags[]-> }`;
};

const renderTags = (tagIds: string[]) => {
  console.log('renderTags -> tagIds', tagIds);
  if (isEmpty(tagIds)) return '';

  return ` && tags[]._ref in [${tagIds.join(', ')}]`;
};

const renderCategories = (category: string) => {
  if (category === ALL_CATEGORIES) return '';

  return ` && categories[] == ${category}`;
};

const renderAmount = (page: number) => {
  const end = PER_PAGE_NEWS * page - 1;
  const start = end - PER_PAGE_NEWS + 1;
  return `[${start}..${end}]`;
};
