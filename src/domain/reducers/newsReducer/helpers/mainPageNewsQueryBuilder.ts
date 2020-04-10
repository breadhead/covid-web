import { ACTIVE_AND_NOT_DRAFT_SANITY } from '@app/src/helpers/activeAndNotDraftSanity';

export const featuredNewsQueryBuilder = () => {
  return `*[
    _type == 'news' &&  
  ${ACTIVE_AND_NOT_DRAFT_SANITY} && 
  showOnMain == true 
  ]  | 
  order(date desc) |
  order(sortIndex desc)
  {..., 'tags': tags[]-> }`;
};
