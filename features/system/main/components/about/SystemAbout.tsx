import * as React from 'react';
import htmlParser from 'react-html-parser';
import cx from 'classnames';

import PartnersList from '@app/features/landing/features/home/organisms/Corporate/components/Partners/components/PartnersList';

import * as styles from './SystemAbout.css';
import { aboutText } from './aboutText';
import { aboutFeatures } from './aboutFeatures';

export const SystemAbout = () => {
  return (
    <section className="gl-wrapper">
      <div className="gl-section">
        <h2 className="gl-sectionTitle">О проекте</h2>
        <div className="gl-text">{htmlParser(aboutText)}</div>
        <div className={styles.features}>
          {aboutFeatures.map((feature) => {
            return (
              <article
                key={feature.id}
                className={cx(styles.feature, 'gl-bubble')}
              >
                {feature.content}
              </article>
            );
          })}
        </div>
        <p className={styles.slogan}>Только вместе мы можем справиться!</p>
        <PartnersList />
      </div>
    </section>
  );
};
