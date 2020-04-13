import { ACTIVE_AND_NOT_DRAFT_SANITY } from '@app/src/helpers/activeAndNotDraftSanity';
import { NewsCategoryType } from '@app/src/domain/models/common/NewsCategoryType';

export const newsForHospitalsQueryBuilder = () => {
  return `*[
    _type == 'news' &&  
  ${ACTIVE_AND_NOT_DRAFT_SANITY} && 
  showOnMain == true  &&
  '${NewsCategoryType.Help}' in categories[]
  ]  | 
  order(date desc) |
  order(sortIndex desc)
  {..., 'tags': tags[]-> }`;
};
