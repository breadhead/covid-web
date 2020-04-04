import * as React from 'react';

import DonationInfo from '@app/features/landing/features/home/organisms/Info';

import * as styles from './SystemDonation.css';
import { infoText } from './infoText';
import { SystemWidget } from './components/system-widget';

export const SystemDonation = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.donation}>
        <h2 className={styles.title}>Поддержать</h2>

        <div className={styles.content}>
          <SystemWidget />
          <DonationInfo text={infoText} />
        </div>
      </section>
    </div>
  );
};
