import * as React from 'react';

import { ShareWidget } from '@front/features/common/shareWidget';
import { getFromConfig } from '@front/lib/getPublicRuntimeConfig';

import * as styles from './SystemHelp.css';
import { HelpOptions } from './components/options';
import { HelpFooter } from './components/help-footer';

export const SystemHelp = () => {
  return (
    <section className={styles.systemHelp}>
      <h2 className="gl-sectionTitle">Как помочь</h2>
      <HelpOptions />
      <ShareWidget
        shareUrl={getFromConfig('prodUrl')}
        title={'Пусть больше людей узнает о проекте'}
      />
    </section>
  );
};
