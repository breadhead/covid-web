import { isEmpty } from 'lodash';

export const newsRequestBuilder = (categories: string[], tagIds: string[]) => {
  return `*[_type == 'news' &&  !(_id in path("drafts.**")) ${renderTags(
    tagIds,
  )} ${renderCategories(categories)}]{ 'tags': tags[]->{...}}`;
};

const renderTags = (tagIds: string[]) => {
  if (isEmpty(tagIds)) return '';

  return ` && tags[]._ref in [${tagIds.join(', ')}]`;
};

const renderCategories = (category) => {
  if (!category) return '';

  return ` && categories[] == ${category}`;
};
