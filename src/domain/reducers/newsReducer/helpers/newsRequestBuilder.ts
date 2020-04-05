import { isEmpty } from 'lodash';

import { NewsCategoryType } from '@app/src/domain/models/common/NewsCategoryType';

export const newsRequestBuilder = (
  category: NewsCategoryType | '',
  tagIds: string[],
) => {
  return `*[_type == 'news' &&  !(_id in path("drafts.**")) ${renderTags(
    tagIds,
  )} ${renderCategories(category)}]{..., 'tags': tags[]->{...}}`;
};

const renderTags = (tagIds: string[]) => {
  if (isEmpty(tagIds)) return '';

  return ` && tags[]._ref in [${tagIds.join(', ')}]`;
};

const renderCategories = (category: NewsCategoryType | '') => {
  if (!category) return '';

  return ` && categories[] == ${category}`;
};
