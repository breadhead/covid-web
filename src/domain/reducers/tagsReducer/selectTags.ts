import { State } from '@app/src/lib/store';

export enum TagsType {
  News = 'newsCount',
  Articles = 'articlesCount',
}

export const selectTags = (tagsType: TagsType) => (state: State) =>
  state.tags.list.filter((item) => item[tagsType] > 0);

export const selectAllTags = (state: State) => state.tags.list;
