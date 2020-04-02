import * as React from 'react';

import DonationWidget from '@app/features/main/donation';

import * as styles from './Donation.css';
import Info from '../Info';

const Donation = () => (
  <>
    <div id="donation" className={styles.donationWrapper}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Помочь проекту</h2>
        <div className={styles.content}>
          <div className={styles.widget}>
            <DonationWidget />
          </div>
          <Info />
        </div>
      </div>
    </div>
  </>
);

export default Donation;
