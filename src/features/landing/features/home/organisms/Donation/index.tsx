import * as React from 'react';

import { SystemWidget } from '@app/src/features/system/main/components/donation/components/system-widget';

import * as styles from './Donation.css';
import DonationInfo from '../Info';
import { infoText } from './infoText';
import { PageType } from '../../../partners/organisms/PartnersList/config';

interface SystemWidgetProps {
  pageType?: PageType;
}

const Donation = ({ pageType }: SystemWidgetProps) => (
  <>
    <div id="donation-ask" className={styles.donationWrapper}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Помочь проекту</h2>
        <div className={styles.content}>
          <div className={styles.widget}>
            <SystemWidget pageType={pageType} />
          </div>
          <DonationInfo text={infoText} />
        </div>
      </div>
    </div>
  </>
);

export default Donation;
