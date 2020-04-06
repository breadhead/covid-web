export enum CategoryType {
  News = 'news',
  Help = 'help',
  Report = 'report',
}

export const ALL_CATEGORIES = 'all_categories';

export type NewsCategoryQueryType = typeof CategoryType | typeof ALL_CATEGORIES;

export const getCategoryText = (category: CategoryType) =>
  ({
    [CategoryType.Help]: 'Помощь больницам',
    [CategoryType.News]: 'Новости',
    [CategoryType.Report]: 'Отчёты',
    [ALL_CATEGORIES]: 'Все категории',
  }[category]);