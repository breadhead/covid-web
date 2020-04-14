import { ACTIVE_AND_NOT_DRAFT_SANITY } from '@app/src/helpers/activeAndNotDraftSanity';

import { NewsCategoryType } from '../../models/common/NewsCategoryType';
import { CategoryType as ArticlesCategoryType } from '../../models/common/ArticlesCategoryType';

const categoriesQuery = () => {
  return [
    ...Object.values(NewsCategoryType),
    ...Object.values(ArticlesCategoryType),
  ]
    .map(
      (category) =>
        `'${category}': count(*['${category}' in categories && references(^._id)]),`,
    )
    .join('');
};

export const tagsQuery = `*[_type == "tag" &&  ${ACTIVE_AND_NOT_DRAFT_SANITY}] {..., 
      'count': {${categoriesQuery()}},
      'newsCount': count(*[_type == 'news' && references(^._id) && ^.status == true ]), 
      'articlesCount': count(*[_type == 'article' && references(^._id)  && ^.status == true ])
      }`;
