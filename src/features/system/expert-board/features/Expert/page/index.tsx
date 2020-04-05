import * as React from 'react';

import {SystemLayout} from '@app/src/features/system/layout';
import {Expert as ExpertModel} from '@app/src/domain/models/sanity/Expert';
import {getImageSrc} from '@app/src/lib/useImageSrc/getImageSrc';
import {NavLink} from '@app/src/ui/nav-link';

import * as styles from './ExpertPage.css';

interface Props {
  expert: ExpertModel;
}

const ExpertPage = ({ expert }: Props) => {
  return (
    <SystemLayout className={styles.main}>
      <div className={styles.container}>
        <NavLink className={styles.link} href="/experts">
          Весь экспертный совет
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
  );
};

export default ExpertPage;
