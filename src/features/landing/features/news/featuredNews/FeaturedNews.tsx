import React from 'react';
import cx from 'classnames';
import { useMappedState } from 'redux-react-hook';

import { selectFeaturedNews } from '@app/src/domain/reducers/newsReducer/featured/selectFeaturedNews';
import { NavLink } from '@app/src/ui/nav-link';
import { NewsItem } from '@app/src/domain/models/common/NewsItem';

import s from './FeaturedNews.css';
import { NewsCard } from '../newsCard';

interface FeaturedNewsProps {
  title?: string;
  className?: string;
  newsList: NewsItem[];
}

export const FeaturedNews = ({
  title = 'Другие новости',
  className,
  newsList,
}: FeaturedNewsProps) => {
  return (
    <div className={cx(s.wrapper, className)}>
      <h2 className={cx(s.title, 'gl-sectionTitle')}>{title}</h2>
      <div className={s.list}>
        {newsList.map((newsItem) => (
          <NewsCard key={newsItem._id} data={newsItem}></NewsCard>
        ))}
      </div>
      <NavLink href="/news" className={s.readAll}>
        Читать все новости
      </NavLink>
    </div>
  );
};
