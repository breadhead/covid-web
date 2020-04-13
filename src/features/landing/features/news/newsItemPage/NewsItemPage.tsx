import React from 'react';
import { useMappedState } from 'redux-react-hook';
import Head from 'next/head';

import { Store } from '@app/src/lib/store';
import { getNewsItemFromSanity } from '@app/src/domain/reducers/newsReducer/item/actions';
import { selectNewsItem } from '@app/src/domain/reducers/newsReducer/item/selectNewsItem';
import { SystemLayout } from '@app/src/features/system/layout';
import NotFound from '@app/src/features/common/notFound';

import s from './NewsItem.css';
import { NewsItemContent } from './components/newsItemContent';

interface NewsItemProps {}

export const NewsItemPage = ({}: NewsItemProps) => {
  const newsItem = useMappedState(selectNewsItem);
  if (!newsItem) return <NotFound />;
  return (
    <>
      <Head>
        <title>{newsItem.name}</title>
      </Head>
      <SystemLayout>
        <NewsItemContent newsItem={newsItem}></NewsItemContent>
      </SystemLayout>
    </>
  );
};

NewsItemPage.getInitialProps = async (ctx) => {
  const store = ctx.reduxStore as Store;

  await store.dispatch(getNewsItemFromSanity(ctx.query.id) as any);

  const newsItem = selectNewsItem(store.getState());

  if (!newsItem && ctx.res) {
    ctx.res.statusCode = 404;
  }

  return {};
};
