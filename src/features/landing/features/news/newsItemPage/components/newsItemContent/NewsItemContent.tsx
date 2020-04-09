import React from 'react';
import cx from 'classnames';
import BlockContent from '@sanity/block-content-to-react';
import Head from 'next/head';
import { useMappedState } from 'redux-react-hook';

import { NewsItem } from '@app/src/domain/models/common/NewsItem';
import { getSerializer } from '@app/src/features/common/getSerializer/getSerializer';
import { formatDateWithTime } from '@app/src/helpers/formatDate';
import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';
import { ShareWidget } from '@app/src/features/common/shareWidget';
import { getFromConfig } from '@app/src/helpers/getPublicRuntimeConfig';
import { selectFeaturedNews } from '@app/src/domain/reducers/newsReducer/featured/selectFeaturedNews';
import { NavLink } from '@app/src/ui/nav-link';

import s from './NewsItemContent.css';
import { CategoriesTags } from '../../../../../../../ui/categoriesTags';
import { FeaturedNews } from '../../../featuredNews';

interface NewsItemContentProps {
  newsItem: NewsItem;
}

export const NewsItemContent = ({ newsItem }: NewsItemContentProps) => {
  const serializers = getSerializer({});

  const imageSrc = getImageSrc(newsItem.image);
  const shareUrl = getFromConfig('siteUrl') + '/news/' + newsItem.code.current;
  const featuredNews = useMappedState(selectFeaturedNews);

  return (
    <div className={s.wrapperOuter}>
      <Head>
        <title>{newsItem.name}</title>
      </Head>
      <div className={s.header}>
        <NavLink withoutUnderline href="/news">
          <div className={s.type}>Новости</div>
        </NavLink>
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
              <img className={s.image} src={imageSrc} alt={newsItem.name} />
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
        <div className={cx(s.categoriesTags, s.categoriesTagsFooter)}>
          <CategoriesTags
            categories={newsItem.categories}
            tags={newsItem.tags}
            big
          />
        </div>

        <FeaturedNews list={featuredNews} className={s.featuredNews} />
      </div>
    </div>
  );
};
