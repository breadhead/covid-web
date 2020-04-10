import React from 'react';

import { NewsItem } from '@app/src/domain/models/common/NewsItem';
import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';
import { NavLink } from '@app/src/ui/nav-link';
import { CategoryTypes } from '@app/src/domain/models/common/CategoryTypes';
import { ArticlesItem } from '@app/src/domain/models/common/ArticlesItem';

import s from './NewsCard.css';
import { formatDate } from '../../../../../helpers/formatDate';
import { CategoriesTags } from '../../../../../ui/categoriesTags';

interface NewsCardProps {
  data: NewsItem | ArticlesItem;
  href?: string;
}

export const NewsCard = ({ data, href = 'news' }: NewsCardProps) => {
  const image = getImageSrc(data.image) || '';

  return (
    <NavLink
      withoutUnderline
      href={`/${href}/${data.code.current}`}
      className={s.newsCard}
    >
      {image && <img className={s.image} src={image} alt={data.name} />}
      <div className={s.body}>
        <time className={s.date}>{formatDate(data._updatedAt)}</time>
        <h2 className={s.title}>{data.name}</h2>
        {(data.tags || data.categories) && (
          <div className={s.tags}>
            <CategoriesTags
              href={href}
              tags={data.tags}
              categories={data.categories}
            />
          </div>
        )}
      </div>
    </NavLink>
  );
};
