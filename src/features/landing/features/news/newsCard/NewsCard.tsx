import React from 'react';
import { isBefore, addHours } from 'date-fns';

import { NewsItem } from '@app/src/domain/models/common/NewsItem';
import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';
import { NavLink } from '@app/src/ui/nav-link';
import { CategoryTypes } from '@app/src/domain/models/common/CategoryTypes';
import { ArticlesItem } from '@app/src/domain/models/common/ArticlesItem';
import { IconsList } from '@app/src/ui/sprite';
import { Icon } from '@app/src/ui/icon';
import { CategoryType } from '@app/src/domain/models/common/ArticlesCategoryType';

import s from './NewsCard.css';
import {
  formatDate,
  formatDateWithTime,
} from '../../../../../helpers/formatDate';
import { CategoriesTags } from '../../../../../ui/categoriesTags';

interface NewsCardProps {
  data: NewsItem | ArticlesItem;
  href?: string;
}

export const NewsCard = ({ data, href = 'news' }: NewsCardProps) => {
  const image = getImageSrc(data.image) || '';
  const isWebinar = (data as ArticlesItem).categories?.includes(
    CategoryType.Webinar as any,
  );
  console.log('NewsCard -> isWebinar', isWebinar);
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

    const webinar = data as ArticlesItem;
    const showRegistrationBadge =
      !!webinar.webinarDate &&
      isBefore(new Date(), addHours(webinar.webinarDate, -1));
    return (
      <div className={s.webinarHeader}>
        <Icon className={s.webinarIcon} name={IconsList.Camera}></Icon>
        <span className={s.webinarText}>Вебинар</span>
        {webinar.webinarDate && (
          <>
            <span className={s.divider}></span>
            <span className={s.webinarText}>
              {formatDateWithTime(webinar.webinarDate)}
            </span>
          </>
        )}
        {showRegistrationBadge && (
          <b className={s.registrationBadge}>Регистрация открыта</b>
        )}
      </div>
    );
  }
};
