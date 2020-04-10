import React from 'react';
import cx from 'classnames';

import { NavLink } from '@app/src/ui/nav-link';
import { NewsItem } from '@app/src/domain/models/common/NewsItem';
import { CategoryTypes } from '@app/src/domain/models/common/CategoryTypes';
import { ArticlesItem } from '@app/src/domain/models/common/ArticlesItem';

import s from './FeaturedNews.css';
import { NewsCard } from '../newsCard';

interface FeaturedNewsProps {
  list: NewsItem[] | ArticlesItem[];
  cardType?: CategoryTypes;
  title?: string;
  href?: string;
  linkLabel?: string;
  className?: string;
}

export const FeaturedNews = ({
  title = 'Другие новости',
  href = '/news',
  linkLabel = 'Читать все новости',
  className,
  list,
}: FeaturedNewsProps) => {
  return (
    <div className={cx(s.wrapper, className)}>
      <h2 className={cx(s.title, 'gl-sectionTitle')}>{title}</h2>
      <div className={s.list}>
        {(list as any).slice(0, 2).map((item) => (
          <NewsCard href="/news" key={item._id} data={item} />
        ))}
      </div>
      <NavLink href={`/${href}`} className={s.readAll}>
        {linkLabel}
      </NavLink>
    </div>
  );
};
