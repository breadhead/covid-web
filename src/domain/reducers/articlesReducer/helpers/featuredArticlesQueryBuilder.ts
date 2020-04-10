import { ACTIVE_AND_NOT_DRAFT_SANITY } from '@app/src/helpers/activeAndNotDraftSanity';

export const featuredArticlesQueryBuilder = () => {
  return `*[_type == 'article' && ${ACTIVE_AND_NOT_DRAFT_SANITY}] | order(date desc) {..., 'tags': tags[]-> }[0...5]`;
};
