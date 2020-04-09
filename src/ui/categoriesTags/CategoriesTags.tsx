import React from 'react';

import { TagType } from '@app/src/domain/models/common/Tag';
import {
  getNewsCategoryText,
  CategoryType,
} from '@app/src/domain/models/common/NewsCategoryType';

import { Tag } from '../tag';

interface TagsProps {
  tags?: TagType[];
  categories?: CategoryType[];
  big?: boolean;
  href?: string;
}

export const CategoriesTags = ({
  tags,
  categories,
  big = false,
  href = 'news',
}: TagsProps) => {
  return (
    <>
      {categories?.map((category) => (
        <Tag
          big={big}
          highlighted
          key={category}
          href={`/${href}?category=${category}`}
          text={getNewsCategoryText(category)}
        />
      ))}
      {tags?.map((tag) => (
        <Tag
          big={big}
          key={tag?.code?.current}
          href={`/${href}?tags=${tag?.code?.current}`}
          text={tag.name}
        />
      ))}
    </>
  );
};
