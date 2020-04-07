import React from 'react';
import { useMappedState } from 'redux-react-hook';

import { Store } from '@app/src/lib/store';
import { getNewsItemFromSanity } from '@app/src/domain/reducers/newsReducer/item/actions';
import { selectNewsItem } from '@app/src/domain/reducers/newsReducer/item/selectNewsItem';
import { SystemLayout } from '@app/src/features/system/layout';

import s from './NewsItem.css';
import { NewsItemContent } from './components/newsItemContent';

interface NewsItemProps {}

export const NewsItemPage = ({}: NewsItemProps) => {
  const newsItem = useMappedState(selectNewsItem);
  if (!newsItem)
    return (
      <SystemLayout>
        <div>Такой новости нет</div>
      </SystemLayout>
    );
  return (
    <SystemLayout>
      <NewsItemContent newsItem={newsItem}></NewsItemContent>
    </SystemLayout>
  );
};

NewsItemPage.getInitialProps = async (ctx) => {
  await (ctx.reduxStore as Store).dispatch(
    getNewsItemFromSanity(ctx.query.id) as any,
  );

  return {};
};
