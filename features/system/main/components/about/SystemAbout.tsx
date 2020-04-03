import * as React from 'react';
import htmlParser from 'react-html-parser';

import PartnersList from '@app/features/landing/features/home/organisms/Corporate/components/Partners/components/PartnersList';

import * as styles from './SystemAbout.css';
import { aboutText } from './aboutText';
import { aboutFeatures } from './aboutFeatures';

export const SystemAbout = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>О проекте</h2>
      <div className={styles.textWrapper}>{htmlParser(aboutText)}</div>
      <div className={styles.features}>
        {aboutFeatures.map((feature) => {
          return (
            <article key={feature.id} className={styles.feature}>
              {feature.content}
            </article>
          );
        })}
      </div>
      <p className={styles.slogan}>Только вместе мы можем справиться!</p>
      <PartnersList />
    </section>
  );
};
