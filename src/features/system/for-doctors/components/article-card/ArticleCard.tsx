import React from 'react';

import { ArticlesItem } from '@app/src/domain/models/common/ArticlesItem';
import { formatDate } from '@app/src/helpers/formatDate';
import { NavLink } from '@app/src/ui/nav-link';
import { Tag } from '@app/src/ui/tag';

import * as styles from './ArticleCards.css';

interface ArticleCardProps {
  article: ArticlesItem;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <NavLink
      href={`/for-doctors/${article.code.current}`}
      withoutUnderline
      className={styles.card}
    >
      <div className={styles.textWrapper}>
        {article.webinarDate && (
          <span className={styles.date}>
            {formatDate(article.webinarDate.toString())}
          </span>
        )}
        <h4 className={styles.title}>{article.name}</h4>
      </div>
      {!!article.tags && (
        <div>
          {article.tags?.map((tag) => (
            <Tag
              key={tag._id}
              href={`/for-doctors?category=${tag?.code?.current}`}
              text={tag.name}
            />
          ))}
        </div>
      )}
    </NavLink>
  );
};
