import * as React from 'react';
import cx from 'classnames';
import Head from 'next/head';

import { Expert as ExpertModel } from '@app/src/domain/models/common/Expert';
import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';
import { NavLink } from '@app/src/ui/nav-link';
import { SystemLayout } from '@app/src/features/system/layout';

import * as styles from './ExpertPage.css';

interface Props {
  expert: ExpertModel;
}

const ExpertPage = ({ expert }: Props) => {
  return (
    <>
      <Head>
        <title>{expert.name} | Что делать?</title>
      </Head>
      <SystemLayout>
        <div className={cx(styles.container, 'gl-wrapper gl-section')}>
          <NavLink className={styles.link} href="/ask/experts">
            Все эксперты
          </NavLink>
          <section className={styles.expert}>
            <img
              className={styles.photo}
              src={getImageSrc(expert.logo) || ''}
              alt={expert.name}
            />
            <div className={styles.textWrapper}>
              <h1 className={styles.title}>{expert.name}</h1>
              <p className={styles.description}>{expert.subtitle}</p>
              <div className={styles.info}>
                {expert.description.map((blob) =>
                  blob.children.map((child) => (
                    <p key={child._key}>{child.text}</p>
                  )),
                )}
              </div>
            </div>
          </section>
        </div>
      </SystemLayout>
    </>
  );
};

export default ExpertPage;
