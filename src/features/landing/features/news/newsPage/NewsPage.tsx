import Head from 'next/head';
import React from 'react';
import { useMappedState } from 'redux-react-hook';

import { getNewsFromSanity } from '@app/src/domain/reducers/newsReducer/list';
import { getParamsFromQuery } from '@app/src/domain/reducers/newsReducer/list/query';
import { selectNews } from '@app/src/domain/reducers/newsReducer/list/selectNews';
import {
  selectTags,
  TagsType,
} from '@app/src/domain/reducers/tagsReducer/selectTags';
import { PageFilter } from '@app/src/features/common/pageFilter';
import { CategoryTypes } from '@app/src/domain/models/common/CategoryTypes';
import { SystemLayout } from '@app/src/features/system/layout';
import { Store } from '@app/src/lib/store';
import { CategoryType } from '@app/src/domain/models/common/NewsCategoryType';
import { selectFeaturedNews } from '@app/src/domain/reducers/newsReducer/featured/selectFeaturedNews';

import { NewsCard } from '../newsCard';

interface Props {
  query: any;
}

export const NewsPage = ({ query }: Props) => {
  const news = useMappedState(selectNews(query));
  const featuredNews = useMappedState(selectFeaturedNews);
  const tags = useMappedState(selectTags(TagsType.News));

  const categoriesForShowing = Array.from(
    new Set(
      featuredNews
        .map((newsItem) => newsItem.categories)
        .reduce((acc: any, it: any) => {
          return [...acc, ...it];
        }, []),
    ),
  );

  return (
    <SystemLayout>
      <Head>
        <title>Новости | Просто спросить</title>
      </Head>

      <div className="gl-wrapper gl-section">
        <h1 className="gl-pageTitle">Новости</h1>
        <PageFilter
          type={CategoryTypes.News}
          tags={tags}
          categories={categoriesForShowing}
          query={query}
        />
        <div>
          {news.map((newsItem) => (
            <NewsCard data={newsItem} key={newsItem._id}></NewsCard>
          ))}
        </div>
        {/* <Pagination count={40} perPage={PER_PAGE_NEWS} /> */}
      </div>
    </SystemLayout>
  );
};

NewsPage.getInitialProps = async (ctx) => {
  const params = getParamsFromQuery(ctx.query);

  await (ctx.reduxStore as Store).dispatch(getNewsFromSanity(params) as any);

  return { query: ctx.query };
};
