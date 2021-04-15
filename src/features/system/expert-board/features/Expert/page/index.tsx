import * as React from 'react';
import Head from 'next/head';
import BlockContent from '@sanity/block-content-to-react';

import { SystemLayout } from '@app/src/features/system/layout';
import { Expert as ExpertModel } from '@app/src/domain/models/common/Expert';
import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';
import { NavLink } from '@app/src/ui/nav-link';
import { getSerializer } from '@app/src/features/common/getSerializer/getSerializer';

import * as styles from './ExpertPage.css';

interface Props {
  expert: ExpertModel;
}

const SupervisorPage = ({ expert }: Props) => {
  const serializers = getSerializer({});

  return (
    <>
      <Head>
        <title>{expert.name} | Что делать:</title>
      </Head>
      <SystemLayout className={styles.main}>
        <div className={styles.container}>
          <NavLink className={styles.link} href="/supervisory">
            Весь наблюдательный совет
          </NavLink>
          <section className={styles.expert}>
            <img 
              loading="lazy" 
              className={styles.photo}
              src={getImageSrc(expert.logo) || ''}
              alt={expert.name}
            />
            <div className={styles.textWrapper}>
              <h1 className={styles.title}>{expert.name}</h1>
              <p className={styles.description}>{expert.subtitle}</p>
              <div className={styles.info}>
                <BlockContent
                  blocks={expert.description}
                  serializers={serializers}
                />
              </div>
            </div>
          </section>
        </div>
      </SystemLayout>
    </>
  );
};

export default SupervisorPage;
