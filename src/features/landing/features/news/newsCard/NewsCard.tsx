import React from 'react';
import { format } from 'date-fns';
import locale from 'date-fns/locale/ru';

import { NewsItem } from '@app/src/domain/models/common/NewsItem';
import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';
import { NavLink } from '@app/src/ui/nav-link';
import { getCategoryText } from '@app/src/domain/models/common/NewsCategoryType';

import s from './NewsCard.css';
import { Tag } from '../tag';

interface NewsCardProps {
  data: NewsItem;
}

export const NewsCard = ({ data }: NewsCardProps) => {
  const image = getImageSrc(data.image) || '';

  return (
    <NavLink
      withoutUnderline
      href={`/news/${data.code.current}`}
      className={s.newsCard}
    >
      {image && <img className={s.image} src={image} alt={data.name} />}
      <div className={s.body}>
        <time className={s.date}>{formatDate(data._updatedAt)}</time>
        <h2 className={s.title}>{data.name}</h2>
        {(data.tags || data.categories) && (
          <div className={s.tags}>
            {data.categories?.map((category) => (
              <Tag
                highlighted
                key={category}
                href={`/news?category=${category}`}
                text={getCategoryText(category)}
              />
            ))}
            {data.tags?.map((tag) => (
              <Tag
                key={tag.code.current}
                href={`/news?tags=${tag.code.current}`}
                text={tag.name}
              />
            ))}
          </div>
        )}
      </div>
    </NavLink>
  );
};

const formatDate = (date: string) => {
  return format(date, 'D MMMM YYYY', { locale });
};
