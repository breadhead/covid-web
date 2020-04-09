import React from 'react';

import { ArticlesItem } from '@app/src/domain/models/common/ArticlesItem';
import { NavLink } from '@app/src/ui/nav-link';
import { Tag } from '@app/src/ui/tag';

import * as styles from './ArticleCards.css';

interface ArticleCardProps {
  article: ArticlesItem;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <NavLink href={`/${article.code}`} withoutUnderline className={styles.card}>
      <div className={styles.textWrapper}>
        <span className={styles.date}>дата</span>
        <h4 className={styles.title}>{article.name}</h4>
      </div>
      {!!article.tags && (
        <div>
          {article.tags?.map((tag) => (
            <Tag
              key={tag._id}
              href={`/for-doctors?category=${tag.code}`}
              text={tag.name}
            />
          ))}
        </div>
      )}
    </NavLink>
  );
};
