import * as React from 'react';

import DonationWidget from '@app/features/common/donation';

import * as styles from './Donation.css';
import DonationInfo from '../Info';
import { infoText } from './infoText';

const Donation = () => (
  <>
    <div id="donation" className={styles.donationWrapper}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Помочь проекту</h2>
        <div className={styles.content}>
          <div className={styles.widget}>
            <DonationWidget />
          </div>
          <DonationInfo text={infoText} />
        </div>
      </div>
    </div>
  </>
);

export default Donation;
