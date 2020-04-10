export enum CategoryType {
  News = 'news',
  Help = 'help',
  Report = 'report',
}

export const ALL_CATEGORIES = 'all_categories';

export const getNewsCategoryText = (category: string) =>
  ({
    [CategoryType.Help]: 'Помощь больницам',
    [CategoryType.News]: 'Новости',
    [CategoryType.Report]: 'Отчёты',
    [ALL_CATEGORIES]: 'Все категории',
  }[category]);
