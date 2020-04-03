import * as React from 'react';

import { SystemLayout } from '../layout/SystemLayout';
import { SystemHero } from './components/hero';
import { SystemHelp } from './components/help';
import { SystemAbout } from './components/about/SystemAbout';
import * as styles from './SystemMain.css';
// interface SystemMainProps {}

export const SystemMain = () => {
  return (
    <SystemLayout>
      <SystemHero />
      <div className={styles.wrapper}>
        <SystemHelp />
        <SystemAbout />
      </div>
    </SystemLayout>
  );
};
