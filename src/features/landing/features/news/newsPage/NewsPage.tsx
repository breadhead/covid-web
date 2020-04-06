import React from 'react';
import Head from 'next/head';
import { useMappedState } from 'redux-react-hook';

import { Store } from '@app/src/lib/store';
import { getNewsFromSanity } from '@app/src/domain/reducers/newsReducer/list';
import { SystemLayout } from '@app/src/features/system/layout';
import { selectNews } from '@app/src/domain/reducers/newsReducer/list/selectNews';

import s from './NewsPage.css';
import { NewsCard } from '../newsCard';

export const NewsPage = () => {
  const news = useMappedState(selectNews);

  return (
    <SystemLayout>
      <Head>
        <title>Новости | Просто спросить</title>
      </Head>

      <div className="gl-wrapper gl-first-section gl-section">
        <h1 className="gl-pageTitle">Новости</h1>

        <div>
          {news.map((newsItem) => (
            <NewsCard data={newsItem} key={newsItem._id}></NewsCard>
          ))}
        </div>
      </div>
    </SystemLayout>
  );
};

NewsPage.getInitialProps = async (ctx) => {
  await (ctx.reduxStore as Store).dispatch(getNewsFromSanity() as any);

  return {};
};
