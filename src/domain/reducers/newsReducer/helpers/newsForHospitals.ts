import { CategoryType } from '@app/src/domain/models/common/NewsCategoryType';

export const newsForHospitalsQueryBuilder = () => {
  return `*[
    _type == 'news' &&  
  !(_id in path("drafts.**")) && 
  showOnMain == true  &&
  '${CategoryType.Help}' in categories[]
  ]  | 
  order(date desc) |
  order(sortIndex desc)
  {..., 'tags': tags[]-> }`;
};
