import React from 'react';

import { TagType } from './node_modules/@app/src/domain/models/common/Tag';
import {
  getCategoryText,
  CategoryType,
} from './node_modules/@app/src/domain/models/common/NewsCategoryType';
import s from './CategoriesTags.css';
import { Tag } from '../tag';

interface TagsProps {
  tags?: TagType[];
  categories?: CategoryType[];
  big?: boolean;
}

export const CategoriesTags = ({
  tags,
  categories,
  big = false,
}: TagsProps) => {
  return (
    <>
      {categories?.map((category) => (
        <Tag
          big={big}
          highlighted
          key={category}
          href={`/news?category=${category}`}
          text={getCategoryText(category)}
        />
      ))}
      {tags?.map((tag) => (
        <Tag
          big={big}
          key={tag.code.current}
          href={`/news?tags=${tag.code.current}`}
          text={tag.name}
        />
      ))}
    </>
  );
};
