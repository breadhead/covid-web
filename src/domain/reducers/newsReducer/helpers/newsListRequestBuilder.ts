import { isEmpty } from 'lodash';

import { ALL_CATEGORIES } from '@app/src/domain/models/common/NewsCategoryType';
import { TagType } from '@app/src/domain/models/common/Tag';
import { ACTIVE_AND_NOT_DRAFT_SANITY } from '@app/src/helpers/activeAndNotDraftSanity';

import { NewsFetchParams, PER_PAGE_NEWS } from '../list/config';

export const newsListRequestBuilder = (
  params: NewsFetchParams,
  tagValues: TagType[],
) => {
  return `*[_type == 'news' &&  ${ACTIVE_AND_NOT_DRAFT_SANITY} ${renderTags(
    params.tags,
    tagValues,
  )} ${renderCategories(
    params.category,
  )}]  | order(date desc) |  order(sortIndex desc)  ${renderAmount(
    params.page,
  )} {..., 'tags': tags[]-> }`;
};

const renderTags = (tagSlugs: string[], tagValues: TagType[]) => {
  if (isEmpty(tagSlugs)) return '';

  const tagIds = tagSlugs
    .map(
      (slug) =>
        tagValues.find((tagValue) => tagValue.code.current === slug)?._id,
    )
    .filter((it) => !!it)
    .map((tagId) => `'${tagId}'`)
    .join(', ');

  return ` && tags[]._ref in [${tagIds}]`;
};

const renderCategories = (category: string) => {
  if (category === ALL_CATEGORIES) return '';

  return ` && '${category}' in categories[]`;
};

const renderAmount = (page: number) => {
  return '';

  const end = PER_PAGE_NEWS * page - 1;
  const start = end - PER_PAGE_NEWS + 1;
  return `[${start}..${end}]`;
};
