import * as React from 'react';

import * as styles from './SystemHelp.css';
import { HelpOptions } from './components/options';
import { HelpFooter } from './components/help-footer';
// interface SystemHelpProps {}

export const SystemHelp = () => {
  return (
    <section className={styles.systemHelp}>
      <h2 className={styles.title}>Как помочь</h2>
      <HelpOptions />
      <HelpFooter />
    </section>
  );
};
