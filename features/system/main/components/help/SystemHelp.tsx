import * as React from 'react';

import * as styles from './SystemHelp.css';
import { HelpOptions } from './components/options';
import { HelpFooter } from './components/help-footer';
// interface SystemHelpProps {}

export const SystemHelp = () => {
  return (
    <div>
      <h2 className="gl-sectionTitle">Как помочь</h2>
      <HelpOptions />
      <HelpFooter />
    </div>
  );
};
