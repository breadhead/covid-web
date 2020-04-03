import * as React from 'react';

import { SystemLayout } from '../layout/SystemLayout';
import { SystemHero } from './components/hero';
import { SystemHelp } from './components/help';
import { SystemAbout } from './components/about';
import * as styles from './SystemMain.css';
import { SystemDonation } from './components/donation';
// interface SystemMainProps {}

export const SystemMain = () => {
  return (
    <SystemLayout>
      <SystemHero />
      <div className={styles.wrapper}>
        <SystemHelp />
        <SystemAbout />
        <SystemDonation />
      </div>
    </SystemLayout>
  );
};
