import * as React from 'react';
import cx from 'classnames';

import { SystemLayout } from '../../layout';
import { ForClinicsHero } from '../ForClinicsHero/ForClinicsHero';
import { Helping } from '../Helping/Helping';
import { HelpRequest } from '../HelpRequest/HelpRequest';
import { SystemHelp } from '../../main/components/help';
import s from './ForClinics.css';
import { Partners } from '../Partners/Partners';

interface ForClinicsProps {}

export const ForClinics = ({}: ForClinicsProps) => {
  return (
    <SystemLayout>
      <div className="gl-wrapper gl-first-section gl-section">
        <ForClinicsHero></ForClinicsHero>
      </div>
      <div className="gl-wrapper gl-section">
        <Helping></Helping>
      </div>
      <HelpRequest />

      <div className="gl-wrapper gl-first-section gl-section">
        <Partners />
      </div>
      <div className="gl-wrapper gl-section">
        <SystemHelp />
      </div>
    </SystemLayout>
  );
};
