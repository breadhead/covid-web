import React from 'react';

import { Store } from '@app/src/lib/store';
import { getNewsFromSanity } from '@app/src/domain/reducers/newsReducer';

import s from './NewsPage.css';

export const NewsPage = () => {
  return <div>test</div>;
};

NewsPage.getInitialProps = async (ctx) => {
  console.log('NewsPage.getInitialProps -> ctx', ctx);

  await (ctx.reduxStore as Store).dispatch(getNewsFromSanity() as any);

  return {};
};
