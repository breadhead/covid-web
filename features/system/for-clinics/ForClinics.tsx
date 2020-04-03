import * as React from 'react';

import { SystemLayout } from '../layout';
import { ForClinicsHero } from './ForClinicsHero';
import { Helping } from './Helping';
import { HelpRequest } from './HelpRequest';
import { SystemHelp } from '../main/components/help';
import s from './ForClinics.css';
import { Partners } from './Partners';

interface ForClinicsProps {}

export const ForClinics = ({}: ForClinicsProps) => {
  return (
    <SystemLayout>
      <div className={s.wrapper}>
        <ForClinicsHero></ForClinicsHero>
      </div>
      <div className={s.wrapper}>
        <Helping></Helping>
      </div>
      <HelpRequest />

      <div className={s.wrapper}>
        <Partners />
      </div>
      <div className={s.wrapper}>
        <SystemHelp />
      </div>
    </SystemLayout>
  );
};
