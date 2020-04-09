export enum CategoryType {
  Articles = 'articles',
  Help = 'help',
  Report = 'report',
}

export const ALL_CATEGORIES = 'all_categories';

export type ArticlesCategoryQueryType =
  | typeof CategoryType
  | typeof ALL_CATEGORIES;

export const getCategoryText = (category: string) =>
  ({
    [CategoryType.Help]: 'Помощь больницам',
    [CategoryType.Articles]: 'Новости',
    [CategoryType.Report]: 'Отчёты',
    [ALL_CATEGORIES]: 'Все категории',
  }[category]);
