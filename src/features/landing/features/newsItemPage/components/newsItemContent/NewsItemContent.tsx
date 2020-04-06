import React from 'react';
import cx from 'classnames';
import BlockContent from '@sanity/block-content-to-react';

import { NewsItem } from '@app/src/domain/models/common/NewsItem';
import { getSerializer } from '@app/src/features/common/getSerializer/getSerializer';

import s from './NewsItemContent.css';

interface NewsItemContentProps {
  newsItem: NewsItem;
}

export const NewsItemContent = ({ newsItem }: NewsItemContentProps) => {
  const serializers = getSerializer({});

  return (
    <div className={cx(s.wrapper, 'gl-wrapper--narrow', 'gl-first-section')}>
      <h1>{newsItem.name}</h1>
      {newsItem.content && (
        <div>
          <BlockContent blocks={newsItem.content} serializers={serializers} />
        </div>
      )}
    </div>
  );
};
