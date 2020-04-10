import React from 'react';

import { ArticlesItem } from '@app/src/domain/models/common/ArticlesItem';

import * as styles from './ArticleCards.css';
import { ArticleCard } from './ArticleCard';

interface ArticleCardsProps {
  cards: ArticlesItem[];
}

export const ArticleCards = ({ cards }: ArticleCardsProps) => {
  return !!cards && cards.length > 0 ? (
    <div className={styles.wrapper}>
      {cards.slice(0, 3).map((card) => (
        <ArticleCard key={card._id} article={card} />
      ))}
    </div>
  ) : null;
};
