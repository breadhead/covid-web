import { State } from '@app/src/lib/store';

import { ALL_CATEGORIES } from '../../models/common/NewsCategoryType';

export enum TagsType {
  News = 'newsCount',
  Articles = 'articlesCount',
}

export const selectTags = (tagsType: TagsType, category: string) => (
  state: State,
) => {
  const nonEmptyTagsByType = state.tags.list.filter(
    (item) => item[tagsType] > 0,
  );

  if (category === ALL_CATEGORIES) return nonEmptyTagsByType;

  return nonEmptyTagsByType.filter((tag) => (tag.count[category] || 0) > 0);
};

export const selectAllTags = (state: State) => state.tags.list;
