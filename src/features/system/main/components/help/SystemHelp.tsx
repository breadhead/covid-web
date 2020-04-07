import * as React from 'react';

import { ShareWidget } from '@front/features/common/shareWidget';

import * as styles from './SystemHelp.css';
import { HelpOptions } from './components/options';

export const SystemHelp = () => {
  return (
    <section className={styles.systemHelp}>
      <div id="help" className={styles.anchor} />
      <h2 className="gl-sectionTitle">Как помочь</h2>
      <HelpOptions />
      <ShareWidget title={'Пусть больше людей узнает о проекте'} />
    </section>
  );
};
