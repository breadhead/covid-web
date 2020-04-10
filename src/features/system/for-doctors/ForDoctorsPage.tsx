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
import { selectPartners } from '@app/src/domain/reducers/partnerReducer/selectPartners';
import { Divider } from '@app/src/ui/divider/Divider';

import { SystemLayout } from '../layout';
import { PageFilter } from '../../common/pageFilter';
import { NewsCard } from '../../landing/features/news/newsCard';
import * as styles from './ForDoctorsPage.css';
import PartnersList from '../../landing/features/home/organisms/Corporate/components/Partners/components/PartnersList';
import { PageType } from '../../landing/features/partners/organisms/PartnersList/config';
import { ArticleCards } from './components/article-card/ArticleCards';
import { Aside } from './components/aside';
import { ResourcesMobile } from './components/resources-mobile/ResourcesMobile';
interface Props {
  query: any;
}

export const ForDoctorsPage = ({ query }: Props) => {
  const categories = Object.values(CategoryType);
  const tags = useMappedState(selectTags(TagsType.Articles));
  const articles = useMappedState(selectArticles(query));
  const resources = useMappedState(selectResources());
  const partners = useMappedState(selectPartners).filter((partner) => {
    return partner.pageToShow.includes(PageType.Doctors);
  });
  // const pinnedArticles = articles.filter((art) => !!art.pin);
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
              <ArticleCards cards={articles} />
              <PageFilter
                type={CategoryTypes.Articles}
                tags={tags}
                categories={categories}
                query={query}
              />
              <div>
                {articles.map((newsItem) => (
                  <NewsCard
                    href="for-doctors"
                    data={newsItem}
                    key={newsItem._id}
                  ></NewsCard>
                ))}
              </div>
              <ResourcesMobile resources={resources} />
              <Divider className={styles.dividerMobile} />
              <PartnersList
                className="gl-section"
                title="Партнеры раздела"
                pageType={PageType.Doctors}
              />
            </section>
            <div className="asideWrapper">
              <Aside items={resources} />
              <Aside title="Партнеры раздела" items={partners} />
            </div>
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
