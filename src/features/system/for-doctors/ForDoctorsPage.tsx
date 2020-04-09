import * as React from 'react';
import { useMappedState } from 'redux-react-hook';

import { CategoryType } from '@app/src/domain/models/common/ArticlesCategoryType';
import { getParamsFromQuery } from '@app/src/domain/reducers/articlesReducer/list/query';
import { getArticlesFromSanity } from '@app/src/domain/reducers/articlesReducer/list';
import { Store } from '@app/src/lib/store';
import {
  selectTags,
  TagsType,
} from '@app/src/domain/reducers/tagsReducer/selectTags';
import { CategoryTypes } from '@app/src/domain/models/common/CategoryTypes';
import { selectArticles } from '@app/src/domain/reducers/articlesReducer/list/selectArticles';

import { SystemLayout } from '../layout';
import { PageFilter } from '../../common/pageFilter';
import { NewsCard } from '../../landing/features/news/newsCard';

interface Props {
  query: any;
}

export const ForDoctorsPage = ({ query }: Props) => {
  const categories = Object.values(CategoryType);
  const tags = useMappedState(selectTags(TagsType.Articles));
  const articles = useMappedState(selectArticles(query));

  return (
    <SystemLayout>
      <section className="gl-wrapper gl-section">
        <h1 className="gl-pageTitle">Врачам</h1>
        <PageFilter
          type={CategoryTypes.Articles}
          tags={tags}
          categories={categories}
          query={query}
        />
        <div>
          {articles.map((newsItem) => (
            <NewsCard data={newsItem} key={newsItem._id}></NewsCard>
          ))}
        </div>
      </section>
    </SystemLayout>
  );
};

ForDoctorsPage.getInitialProps = async (ctx) => {
  const params = getParamsFromQuery(ctx.query);

  await (ctx.reduxStore as Store).dispatch(
    getArticlesFromSanity(params) as any,
  );

  return { query: ctx.query };
};
