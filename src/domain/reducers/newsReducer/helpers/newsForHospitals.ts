import { CategoryType } from '@app/src/domain/models/common/NewsCategoryType';
import { ACTIVE_AND_NOT_DRAFT_SANITY } from '@app/src/helpers/activeAndNotDraftSanity';

export const newsForHospitalsQueryBuilder = () => {
  return `*[
    _type == 'news' &&  
  ${ACTIVE_AND_NOT_DRAFT_SANITY} && 
  showOnMain == true  &&
  '${CategoryType.Help}' in categories[]
  ]  | 
  order(date desc) |
  order(sortIndex desc)
  {..., 'tags': tags[]-> }`;
};
