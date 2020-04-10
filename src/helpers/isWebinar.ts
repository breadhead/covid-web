import { ArticlesItem } from '../domain/models/common/ArticlesItem';
import { CategoryType } from '../domain/models/common/ArticlesCategoryType';

export const getIsWebinar = (data: any) =>
  (data as ArticlesItem).categories?.includes(CategoryType.Webinar as any);
