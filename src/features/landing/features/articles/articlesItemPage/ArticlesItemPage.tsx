import React from 'react';
import { useMappedState } from 'redux-react-hook';

import { Store } from '@app/src/lib/store';
import { getArticlesItemFromSanity } from '@app/src/domain/reducers/articlesReducer/item/actions';
import { selectArticlesItem } from '@app/src/domain/reducers/articlesReducer/item/selectArticlesItem';
import { SystemLayout } from '@app/src/features/system/layout';

import { ArticlesItemContent } from './components/articlesItemContent';

export const ArticlesItemPage = () => {
  const articlesItem = useMappedState(selectArticlesItem);

  if (!articlesItem)
    return (
      <SystemLayout>
        <div>Такой статьи нет</div>
      </SystemLayout>
    );
  return (
    <SystemLayout>
      <ArticlesItemContent articlesItem={articlesItem}></ArticlesItemContent>
    </SystemLayout>
  );
};

ArticlesItemPage.getInitialProps = async (ctx) => {
  await (ctx.reduxStore as Store).dispatch(
    getArticlesItemFromSanity(ctx.query.id) as any,
  );

  return {};
};
