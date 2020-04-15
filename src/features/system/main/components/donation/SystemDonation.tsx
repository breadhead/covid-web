import * as React from 'react';

import DonationInfo from '@app/src/features/landing/features/home/organisms/Info';
import { PageType } from '@app/src/features/landing/features/partners/organisms/PartnersList/config';

import * as styles from './SystemDonation.css';
import { infoText } from './infoText';
import { SystemWidget } from './components/system-widget';

interface SystemDonationProps {
  pageType?: PageType;
}

export const SystemDonation = ({ pageType }: SystemDonationProps) => {
  return (
    <div className={styles.wrapperOuter}>
      <section className="gl-wrapper gl-section">
        <div id="donation" className={styles.anchor} />
        <h2 className="gl-sectionTitle">Поддержать</h2>

        <div className={styles.content}>
          <SystemWidget pageType={pageType} />
          <DonationInfo text={infoText} />
        </div>
      </section>
    </div>
  );
};
