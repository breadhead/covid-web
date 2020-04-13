import React from 'react';
import { useMappedState } from 'redux-react-hook';

import { Store } from '@app/src/lib/store';
import { getArticlesItemFromSanity } from '@app/src/domain/reducers/articlesReducer/item/actions';
import { selectArticlesItem } from '@app/src/domain/reducers/articlesReducer/item/selectArticlesItem';

import NotFound from '../../common/notFound';
import { SystemLayout } from '../layout';
import { ArticlesItemContent } from './components/articles-item-content';

export const ForDoctorsArticlePage = () => {
  const articlesItem = useMappedState(selectArticlesItem);

  if (!articlesItem) return <NotFound />;
  return (
    <SystemLayout>
      <ArticlesItemContent articlesItem={articlesItem}></ArticlesItemContent>
    </SystemLayout>
  );
};

ForDoctorsArticlePage.getInitialProps = async (ctx) => {
  await (ctx.reduxStore as Store).dispatch(
    getArticlesItemFromSanity(ctx.query.id) as any,
  );

  return {};
};
