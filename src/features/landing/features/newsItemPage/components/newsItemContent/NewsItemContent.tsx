import React from 'react';
import cx from 'classnames';
import BlockContent from '@sanity/block-content-to-react';

import { NewsItem } from '@app/src/domain/models/common/NewsItem';
import { getSerializer } from '@app/src/features/common/getSerializer/getSerializer';
import { formatDateWithTime } from '@app/src/helpers/formatDate';
import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';
import { ShareWidget } from '@app/src/features/common/shareWidget';
import { getFromConfig } from '@app/src/helpers/getPublicRuntimeConfig';

import s from './NewsItemContent.css';
import { CategoriesTags } from '../../../newsPage/categoriesTags';

interface NewsItemContentProps {
  newsItem: NewsItem;
}

export const NewsItemContent = ({ newsItem }: NewsItemContentProps) => {
  console.log('NewsItemContent -> newsItem', newsItem);
  const serializers = getSerializer({});

  const imageSrc = getImageSrc(newsItem.image);
  const shareUrl = getFromConfig('siteUrl') + '/news/' + newsItem.code.current;
  return (
    <div className={s.wrapperOuter}>
      <div className={s.header}>
        <div className={s.type}>Врачам</div>

        <div className={s.categoriesTags}>
          <CategoriesTags
            categories={newsItem.categories}
            tags={newsItem.tags}
            big
          />
        </div>
      </div>

      <div className={cx(s.wrapper, 'gl-wrapper--narrow', 'gl-section')}>
        <div className={s.head}>
          <div className={s.publishDate}>
            {formatDateWithTime(newsItem._updatedAt)}
          </div>
          <h1 className={s.title}>{newsItem.name}</h1>

          {imageSrc && (
            <div className={s.imageWrapper}>
              <img className={s.image} src={imageSrc} alt="" />
            </div>
          )}
        </div>
        {newsItem.content && (
          <div className={s.newsContent}>
            <BlockContent blocks={newsItem.content} serializers={serializers} />
          </div>
        )}

        <ShareWidget
          title={newsItem.name}
          shareUrl={shareUrl}
          imageSrc={imageSrc || undefined}
        />
      </div>
    </div>
  );
};
