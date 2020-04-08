import React from 'react';
import Head from 'next/head';
import { useMappedState } from 'redux-react-hook';

import { Store } from '@app/src/lib/store';
import { getNewsFromSanity } from '@app/src/domain/reducers/newsReducer/list';
import { SystemLayout } from '@app/src/features/system/layout';
import { selectNews } from '@app/src/domain/reducers/newsReducer/list/selectNews';
import { getParamsFromQuery } from '@app/src/domain/reducers/newsReducer/list/query';

import s from './NewsPage.css';
import { NewsCard } from '../newsCard';
interface Props {
  query: any;
}

export const NewsPage = ({ query }: Props) => {
  const news = useMappedState(selectNews(query));

  return (
    <SystemLayout>
      <Head>
        <title>Новости | Просто спросить</title>
      </Head>

      <div className="gl-wrapper gl-section">
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
  const params = getParamsFromQuery(ctx.query);

  await (ctx.reduxStore as Store).dispatch(getNewsFromSanity(params) as any);

  return { query: ctx.query };
};
