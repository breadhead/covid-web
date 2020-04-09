import * as React from 'react';
import { useMappedState } from 'redux-react-hook';
import Head from 'next/head';
import cx from 'classnames';

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
import { getResourcesFromSanity } from '@app/src/domain/reducers/resourcesReducer';
import { selectResources } from '@app/src/domain/reducers/resourcesReducer/selectResources';

import { SystemLayout } from '../layout';
import { PageFilter } from '../../common/pageFilter';
import { NewsCard } from '../../landing/features/news/newsCard';
import * as styles from './ForDoctorsPage.css';
import { ResourcesDesktop } from './components/resources-desktop';
interface Props {
  query: any;
}

export const ForDoctorsPage = ({ query }: Props) => {
  const categories = Object.values(CategoryType);
  const tags = useMappedState(selectTags(TagsType.Articles));
  const articles = useMappedState(selectArticles(query));
  const resources = useMappedState(selectResources());

  return (
    <>
      <Head>
        <title>Врачам | Просто спросить</title>
      </Head>
      <SystemLayout>
        <div className={cx(styles.mainContainer, 'gl-section')}>
          <div className={cx(styles.wrapper)}>
            <section className={cx(styles.main, 'gl-wrapper')}>
              <h1 className="gl-pageTitle">Врачам</h1>
              <PageFilter
                type={CategoryTypes.Articles}
                tags={tags}
                categories={categories}
                query={query}
              />
              <div>
                {articles.map((newsItem) => (
                  <NewsCard
                    type={CategoryTypes.Articles}
                    data={newsItem}
                    key={newsItem._id}
                  ></NewsCard>
                ))}
              </div>
            </section>
            <ResourcesDesktop resources={resources} />
          </div>
        </div>
      </SystemLayout>
    </>
  );
};

ForDoctorsPage.getInitialProps = async (ctx) => {
  const params = getParamsFromQuery(ctx.query);

  await await Promise.all([
    (ctx.reduxStore as Store).dispatch(getArticlesFromSanity(params) as any),
    (ctx.reduxStore as Store).dispatch(getResourcesFromSanity() as any),
  ]);

  return { query: ctx.query };
};
