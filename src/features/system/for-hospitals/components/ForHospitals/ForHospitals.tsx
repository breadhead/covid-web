import * as React from 'react';
import cx from 'classnames';

import { SystemLayout } from '../../../layout';
import { Helping } from '../Helping/Helping';
import { HelpRequest } from '../HelpRequest/HelpRequest';
import { SystemHelp } from '../../../main/components/help';
import s from './ForHospitals.css';
import { Partners } from '../Partners/Partners';
import { ForHospitalsHero } from '../Hero/Hero';

interface ForHospitalsProps {}

export const ForHospitals = ({}: ForHospitalsProps) => {
  return (
    <SystemLayout>
      <div className="gl-wrapper gl-first-section gl-section">
        <ForHospitalsHero></ForHospitalsHero>
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
