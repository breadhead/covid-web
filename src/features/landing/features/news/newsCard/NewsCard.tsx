import React from 'react';

import { CategoryType } from '@app/src/domain/models/common/ArticlesCategoryType';
import { ArticlesItem } from '@app/src/domain/models/common/ArticlesItem';
import { NewsItem } from '@app/src/domain/models/common/NewsItem';
import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';
import { NavLink } from '@app/src/ui/nav-link';
import { WebinarHeader } from '@app/src/ui/webinarHeader';
import { getIsWebinar } from '@app/src/helpers/isWebinar';

import { formatDate } from '../../../../../helpers/formatDate';
import { CategoriesTags } from '../../../../../ui/categoriesTags';
import s from './NewsCard.css';

interface NewsCardProps {
  data: NewsItem | ArticlesItem;
  href?: string;
}

export const NewsCard = ({ data, href = 'news' }: NewsCardProps) => {
  const image = getImageSrc(data.image) || '';
  const isWebinar = getIsWebinar(data);

  return (
    <NavLink
      withoutUnderline
      href={`/${href}/${data.code.current}`}
      className={s.newsCard}
    >
      {image && <img className={s.image} src={image} alt={data.name} />}
      <div className={s.body}>
        {renderHeader()}
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

  function renderHeader() {
    if (!isWebinar)
      return <time className={s.date}>{formatDate(data._updatedAt)}</time>;

    return <WebinarHeader data={data} />;
  }
};
