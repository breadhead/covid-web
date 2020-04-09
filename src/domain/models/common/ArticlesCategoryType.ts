export enum CategoryType {
  ClinicalRecommends = 'clinicalRecommends',
  Webinar = 'webinar',
  Article = 'article',
}

export const ALL_CATEGORIES = 'all_categories';

export type ArticlesCategoryQueryType =
  | typeof CategoryType
  | typeof ALL_CATEGORIES;

export const getArticleCategoryText = (category: string) =>
  ({
    [CategoryType.Article]: 'Статьи и переводы',
    [CategoryType.Webinar]: 'Вебинары',
    [CategoryType.ClinicalRecommends]: 'Клинические рекомендации',
    [ALL_CATEGORIES]: 'Все материалы',
  }[category]);
