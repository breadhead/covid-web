export enum NewsCategoryType {
  News = 'news',
  Help = 'help',
  Report = 'report',
}

export const ALL_CATEGORIES = 'all_categories';

export const getNewsCategoryText = (category: string) =>
  ({
    [NewsCategoryType.Help]: 'Помощь больницам',
    [NewsCategoryType.News]: 'Новости',
    [NewsCategoryType.Report]: 'Отчёты',
    [ALL_CATEGORIES]: 'Все категории',
  }[category]);
