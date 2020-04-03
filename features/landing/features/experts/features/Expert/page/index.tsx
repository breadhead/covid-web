import * as React from 'react';

import { MainLayout } from '@app/features/main/layout';

import { NavLink } from '@front/ui/nav-link';

import * as styles from './ExpertPage.css';
import {AppContext} from "@app/lib/server-types";
import {getExpertsFromSanity} from "@app/features/common/expertReducer";
import {Expert} from "@app/models/sanity/Expert";
import {getImageSrc} from "@app/lib/useImageSrc/getImageSrc";


interface Props {
  expert: Expert;
}

const ExpertPage = ({ expert }: Props) => {
  return (
    <MainLayout className={styles.main}>
      <div className={styles.container}>
        <NavLink className={styles.link} href="/experts">
          Все эксперты
        </NavLink>
        <section className={styles.expert}>
          <img className={styles.photo} src={getImageSrc(expert.logo) || ''} alt={expert.name} />
          <div className={styles.textWrapper}>
            <h1 className={styles.title}>{expert.name}</h1>
            <p className={styles.description}>{expert.subtitle}</p>
            <div className={styles.info}>
              {expert.description}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

ExpertPage.getInitialProps = async (context: AppContext) => {
  await context.reduxStore.dispatch(getExpertsFromSanity() as any);

  return {};
};


export default ExpertPage;
