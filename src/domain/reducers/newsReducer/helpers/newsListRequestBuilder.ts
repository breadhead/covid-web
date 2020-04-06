import { isEmpty } from 'lodash';

import {
  NewsCategoryQueryType,
  ALL_CATEGORIES,
} from '@app/src/domain/models/common/NewsCategoryType';

export const newsListRequestBuilder = (
  category: NewsCategoryQueryType,
  tagIds: string[],
) => {
  return `*[_type == 'news' &&  !(_id in path("drafts.**")) ${renderTags(
    tagIds,
  )} ${renderCategories(
    category,
  )}]  | order(_updatedAt desc) {..., 'tags': tags[]->{...}}`;
};

const renderTags = (tagIds: string[]) => {
  if (isEmpty(tagIds)) return '';

  return ` && tags[]._ref in [${tagIds.join(', ')}]`;
};

const renderCategories = (category: NewsCategoryQueryType) => {
  if (category === ALL_CATEGORIES) return '';

  return ` && categories[] == ${category}`;
};
