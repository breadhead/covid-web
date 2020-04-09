import { CategoryTypes } from '@app/src/domain/models/common/CategoryTypes';
import { getNewsCategoryText } from '@app/src/domain/models/common/NewsCategoryType';
import { getArticleCategoryText } from '@app/src/domain/models/common/ArticlesCategoryType';

export const getCategoryText = (category: string, type: CategoryTypes) => {
  switch (type) {
    case CategoryTypes.News:
      return getNewsCategoryText(category);
    case CategoryTypes.Articles:
      return getArticleCategoryText(category);
    default:
      return null;
  }
};
