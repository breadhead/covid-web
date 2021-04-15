import { isEmpty } from 'lodash';

import { ALL_CATEGORIES } from '@app/src/domain/models/common/ArticlesCategoryType';
import { TagType } from '@app/src/domain/models/common/Tag';
import { ACTIVE_AND_NOT_DRAFT_SANITY } from '@app/src/helpers/activeAndNotDraftSanity';

import { ArticlesFetchParams, PER_PAGE_ARTICLES } from '../list/config';

export const articlesListRequestBuilder = (
  params: ArticlesFetchParams,
  tagValues: TagType[],
) => {
  return `*[_type == 'article' &&  ${ACTIVE_AND_NOT_DRAFT_SANITY} ${renderTags(
    params.tags,
    tagValues,
  )} ${renderCategories(params.category)}]  | order(date desc) ${renderAmount(
    params.page,
  )} {  _type, status, sortIndex, name, code, categories, image, pin, date, webinarDate, 'tags': tags[]-> }`;
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

  const end = PER_PAGE_ARTICLES * page - 1;
  const start = end - PER_PAGE_ARTICLES + 1;
  return `[${start}..${end}]`;
};
