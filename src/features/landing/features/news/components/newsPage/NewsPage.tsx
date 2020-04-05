import React from 'react';
import Head from 'next/head';

import { Store } from '@app/src/lib/store';
import { getNewsFromSanity } from '@app/src/domain/reducers/newsReducer';
import { SystemLayout } from '@app/src/features/system/layout';

import s from './NewsPage.css';

export const NewsPage = () => {
  return (
    <SystemLayout>
      <Head>
        <title>Новости | Просто спросить</title>
      </Head>

      <div className="gl-wrapper gl-first-section gl-section">
        <h1 className="gl-pageTitle">Новости</h1>
      </div>
    </SystemLayout>
  );
};

NewsPage.getInitialProps = async (ctx) => {
  await (ctx.reduxStore as Store).dispatch(getNewsFromSanity() as any);

  return {};
};
