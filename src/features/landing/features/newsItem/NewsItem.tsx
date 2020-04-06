import React from 'react';
import { useMappedState } from 'redux-react-hook';

import { Store } from '@app/src/lib/store';
import { getNewsItemFromSanity } from '@app/src/domain/reducers/newsReducer/item/actions';
import { selectNewsItem } from '@app/src/domain/reducers/newsReducer/item/selectNewsItem';

import s from './NewsItem.css';
import { NewsItemContent } from './components/newsItemContent';

interface NewsItemProps {}

export const NewsItemPage = ({}: NewsItemProps) => {
  const newsItem = useMappedState(selectNewsItem);
  if (!newsItem) return <div>empty</div>;
  return <NewsItemContent newsItem={newsItem}></NewsItemContent>;
};

NewsItemPage.getInitialProps = async (ctx) => {
  console.log('NewsItem.getInitialProps -> ctx', ctx.query.id);
  await (ctx.reduxStore as Store).dispatch(
    getNewsItemFromSanity(ctx.query.id) as any,
  );

  return {};
};
