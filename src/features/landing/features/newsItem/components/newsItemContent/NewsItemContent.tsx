import React from 'react';

import { NewsItem } from '@app/src/domain/models/common/NewsItem';

import s from './NewsItemContent.css';

interface NewsItemContentProps {
  newsItem: NewsItem;
}

export const NewsItemContent = ({ newsItem }: NewsItemContentProps) => {
  return (
    <div>
      <h1>{newsItem.name}</h1>

      <div>test</div>
    </div>
  );
};
