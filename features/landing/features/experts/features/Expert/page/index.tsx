import * as React from 'react';

import { MainLayout } from '@app/features/main/layout';
import { Expert as ExpertModel } from '@app/models/sanity/Expert';
import { getImageSrc } from '@app/lib/useImageSrc/getImageSrc';

import { NavLink } from '@front/ui/nav-link';

import * as styles from './ExpertPage.css';

interface Props {
  expert: ExpertModel;
}

const ExpertPage = ({ expert }: Props) => {
  return (
    <MainLayout className={styles.main}>
      <div className={styles.container}>
        <NavLink className={styles.link} href="/experts">
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
    </MainLayout>
  );
};

export default ExpertPage;
