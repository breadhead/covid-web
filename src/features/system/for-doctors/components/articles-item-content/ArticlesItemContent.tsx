import React from 'react';
import cx from 'classnames';
import BlockContent from '@sanity/block-content-to-react';
import Head from 'next/head';
import { useMappedState } from 'redux-react-hook';

import { ArticlesItem } from '@app/src/domain/models/common/ArticlesItem';
import { getSerializer } from '@app/src/features/common/getSerializer/getSerializer';
import { formatDateWithTime } from '@app/src/helpers/formatDate';
import { getFromConfig } from '@app/src/helpers/getPublicRuntimeConfig';
import { NavLink } from '@app/src/ui/nav-link';
import { ShareWidget } from '@app/src/features/common/shareWidget';
import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';
import { CategoriesTags } from '@app/src/ui/categoriesTags';
import { selectFeaturedArticles } from '@app/src/domain/reducers/articlesReducer/featured/selectFeaturedArticles';
import { FeaturedNews } from '@app/src/features/landing/features/news/featuredNews';

import s from './ArticlesItemContent.css';

interface ArticlesItemContentProps {
  articlesItem: ArticlesItem;
}

export const ArticlesItemContent = ({
  articlesItem,
}: ArticlesItemContentProps) => {
  const serializers = getSerializer({});

  const imageSrc = getImageSrc(articlesItem.image);
  const shareUrl =
    getFromConfig('siteUrl') + '/for-doctors/' + articlesItem.code.current;
  const featuredArticles = useMappedState(selectFeaturedArticles);

  return (
    <div className={s.wrapperOuter}>
      <Head>
        <title>{articlesItem.name}</title>
      </Head>
      <div className={s.header}>
        <NavLink withoutUnderline href="/for-doctors">
          <div className={s.type}>Врачам</div>
        </NavLink>
        <div className={s.categoriesTags}>
          <CategoriesTags
            categories={articlesItem.categories}
            tags={articlesItem.tags}
            big
          />
        </div>
      </div>

      <div className={cx(s.wrapper, 'gl-wrapper--narrow', 'gl-section')}>
        <div className={s.head}>
          <div className={s.publishDate}>
            {formatDateWithTime(articlesItem._updatedAt)}
          </div>
          <h1 className={s.title}>{articlesItem.name}</h1>

          {imageSrc && (
            <div className={s.imageWrapper}>
              <img className={s.image} src={imageSrc} alt={articlesItem.name} />
            </div>
          )}
        </div>
        {articlesItem.content && (
          <div>
            <BlockContent
              blocks={articlesItem.content}
              serializers={serializers}
            />
          </div>
        )}
      </div>
      <div className="gl-wrapper">
        <ShareWidget title={articlesItem.name} shareUrl={shareUrl} />

        <div className={cx(s.categoriesTags, s.categoriesTagsFooter)}>
          <CategoriesTags
            categories={articlesItem.categories}
            tags={articlesItem.tags}
            big
          />
        </div>
        <FeaturedNews
          title="Другие статьи"
          className="gl-section"
          href="for-doctors"
          linkLabel="Все статьи"
          list={featuredArticles}
        />
      </div>
    </div>
  );
};
