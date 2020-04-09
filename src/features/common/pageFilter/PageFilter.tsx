import { isEmpty } from 'lodash';
import React from 'react';

import {
  ALL_CATEGORIES,
  getCategoryText,
} from '@app/src/domain/models/common/NewsCategoryType';
import { TagType } from '@app/src/domain/models/common/Tag';
import { getParamsFromQuery } from '@app/src/domain/reducers/newsReducer/list/query';
import { Tag } from '@app/src/ui/tag';

import s from './PageFilter.css';

interface PageFilterProps {
  categories: string[];
  tags: TagType[];
  query: any;
}

export const PageFilter = ({ categories, query, tags }: PageFilterProps) => {
  const params = getParamsFromQuery(query);

  return (
    <div className={s.wrapper}>
      <div className={s.categories}>
        <Tag
          huge
          active={ALL_CATEGORIES === params.category}
          href={getCategoryLink(ALL_CATEGORIES, query)}
          text={getCategoryText(ALL_CATEGORIES)}
        />
        {categories.map((category) => (
          <Tag
            huge
            active={category === params.category}
            key={category}
            href={getCategoryLink(category, query)}
            text={getCategoryText(category)}
          />
        ))}
      </div>

      <div className={s.tags}>
        {tags.map((tag) => (
          <Tag
            active={params.tags.includes(tag.code.current)}
            big
            key={tag.code.current}
            href={getTagLink(tag, query)}
            text={tag.name}
          />
        ))}
      </div>
    </div>
  );
};

const getCategoryLink = (category: string, query: any) => {
  const categoryValue = category === ALL_CATEGORIES ? '' : category;

  return { pathname: `/news`, query: { ...query, category: categoryValue } };
};

const getTagLink = (tag: TagType, query: any) => {
  const newQuery = addOrRemoveTag(tag, query);
  return { pathname: `/news`, query: newQuery };
};

const addOrRemoveTag = (tag: TagType, query: any) => {
  const { tags } = getParamsFromQuery(query);
  const presentIndex = tags.findIndex(
    (tagItem) => tagItem === tag.code.current,
  );
  if (presentIndex === -1) {
    const newTags = [...tags, tag.code.current];
    return { ...query, tags: newTags.join(',') };
  }
  const newTags = tags
    .filter((tagItem) => tagItem !== tag.code.current)
    .filter((it) => !!it);

  return { ...query, tags: isEmpty(newTags) ? undefined : newTags.join(',') };
};
