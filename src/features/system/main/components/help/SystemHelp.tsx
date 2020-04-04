import * as React from 'react';

import * as styles from './SystemHelp.css';
import { HelpOptions } from './components/options';
import { HelpFooter } from './components/help-footer';

export const SystemHelp = () => {
  return (
    <section className={styles.systemHelp}>
      <div className="gl-wrapper gl-first-section gl-section">
        <h2 className="gl-sectionTitle">Как помочь</h2>
        <HelpOptions />
        <HelpFooter />
      </div>
    </section>
  );
};
