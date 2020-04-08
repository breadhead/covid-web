import * as React from 'react';

import DonationInfo from '@app/src/features/landing/features/home/organisms/Info';

import * as styles from './SystemDonation.css';
import { infoText } from './infoText';
import { SystemWidget } from './components/system-widget';

export const SystemDonation = () => {
  return (
    <div className={styles.wrapperOuter}>
      <section className="gl-wrapper gl-section">
        <div id="donation" className={styles.anchor} />
        <h2 className="gl-sectionTitle">Поддержать</h2>

        <div className={styles.content}>
          <SystemWidget />
          <DonationInfo text={infoText} />
        </div>
      </section>
    </div>
  );
};
