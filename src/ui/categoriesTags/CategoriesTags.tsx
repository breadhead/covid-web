import React from 'react';

import { TagType } from '@app/src/domain/models/common/Tag';
import { getCategoryText } from '@app/src/features/common/pageFilter/helpers/getCategoryText';
import { NewsCategoryType } from '@app/src/domain/models/common/NewsCategoryType';

import { Tag } from '../tag';

interface TagsProps {
  tags?: TagType[];
  categories?: NewsCategoryType[];
  big?: boolean;
  href?: string;
  type: string;
}

export const CategoriesTags = ({
  tags,
  categories,
  big = false,
  href = 'news',
  type,
}: TagsProps) => {
  return (
    <>
      {categories?.map((category) => (
        <Tag
          big={big}
          highlighted
          key={category}
          href={`/${href}?category=${category}`.replace(/^\/\//gi, '/')}
          text={getCategoryText(category, type as any)}
        />
      ))}
      {tags?.map((tag) => (
        <Tag
          big={big}
          key={tag?.code?.current}
          href={`/${href}?tags=${tag?.code?.current}`.replace(/^\/\//gi, '/')}
          text={tag.name}
        />
      ))}
    </>
  );
};
